import setFocus from "@lib/setFocus.js";

const lang = document.documentElement.getAttribute('lang');
const hbsptContactForm = {
    init: function (lang) {
        let script = document.createElement('script');
        script.charset = 'utf-8';
        script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
        script.addEventListener('load', function () { hbsptContactForm.initForm(lang) }, false);
        document.head.appendChild(script);
    },
    initForm: function (lang) {
        let formId = "bb60b9c5-3860-45fd-a111-cfde5c8af036";
        
        // @ts-ignore
        if (hbspt) {
            hbspt.forms.create({
                region: "eu1",
                portalId: "143190687",
                formId,
                cssRequired: "",
                cssClass: "cxm-hbs-form",
                css: "",
                target: "#cxm-contact-form",
                onFormReady: function () {
                    const formWrapper = document.getElementById("cxm-contact-form");
                    const formSkeleton = document.getElementById("contact-form-placeholder");
                    formWrapper?.setAttribute('aria-busy', "false");
                    formSkeleton?.classList.add("hidden");
                    formSkeleton?.setAttribute("aria-hidden", "true");
                },
                onFormFailedValidation: function (form) {
                    setTimeout(() => {
                        const errorSummary = form.querySelector('.hs_error_rollup');

                        if (errorSummary) {
                            setFocus(errorSummary, {
                                onBeforeFocus() {
                                    errorSummary.classList.add("error-summary-has-focus");
                                },
                                onBlur() {
                                    errorSummary.classList.remove("error-summary-has-focus");
                                },
                            });
                        }
                    }, 300);
                },
                onFormSubmitted: function (succesMessage) {
                    setTimeout(() => {
                        setFocus(succesMessage, {
                            onBeforeFocus() {
                                succesMessage.classList.add("succes-message-has-focus");
                            },
                            onBlur() {
                                succesMessage.classList.remove("succes-message-has-focus");
                            },
                        });
                    }, 300);
                },
            })
        }
    },
};
hbsptContactForm.init(lang);
