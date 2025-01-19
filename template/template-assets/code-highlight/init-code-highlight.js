hljs.highlightAll();

(() => {
    'use strict'
    const btnTitle = 'Copy to clipboard'
    const btnEdit = 'Edit on HMTMCSE'

    const btnHtml = [
        '<div class="bd-code-snippet">',
        '   <div class="bd-clipboard">',
        '      <button type="button" class="btn-clipboard">',
        '        Copy',
        '      </button>',
        '   </div>',
        '</div>'
    ].join('')

    document.querySelectorAll('.highlight')
        .forEach(element => {
            if (!element.closest('.bd-example-snippet')) {
                element.insertAdjacentHTML('beforebegin', btnHtml)
                element.previousElementSibling.append(element)
            }
        })

    function snippetButtonTooltip(selector, title) {
        document.querySelectorAll(selector).forEach(btn => {
            bootstrap.Tooltip.getOrCreateInstance(btn, {title})
        })
    }

    snippetButtonTooltip('.btn-clipboard', btnTitle)
    snippetButtonTooltip('.btn-edit', btnEdit)

    const clipboard = new ClipboardJS('.btn-clipboard', {
        target: trigger => trigger.closest('.bd-code-snippet').querySelector('.highlight')
    })

    clipboard.on('success', event => {
        const tooltipBtn = bootstrap.Tooltip.getInstance(event.trigger)
        tooltipBtn.setContent({'.tooltip-inner': 'Copied!'})
        event.trigger.addEventListener('hidden.bs.tooltip', () => {
            tooltipBtn.setContent({'.tooltip-inner': btnTitle})
        }, {once: true})
        event.clearSelection()
    })

    clipboard.on('error', event => {
        const modifierKey = /mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
        const fallbackMsg = `Press ${modifierKey}C to copy`
        const tooltipBtn = bootstrap.Tooltip.getInstance(event.trigger)

        tooltipBtn.setContent({'.tooltip-inner': fallbackMsg})
        event.trigger.addEventListener('hidden.bs.tooltip', () => {
            tooltipBtn.setContent({'.tooltip-inner': btnTitle})
        }, {once: true})
    })
})()
