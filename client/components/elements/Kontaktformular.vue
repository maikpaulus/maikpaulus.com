<template>
    <div class="cmp-kontaktformular text-center">
        <div class="max-width">
            <p>
                Ich werde versuchen, deine Nachricht so schnell wie möglich zu beantworten. 
                Wenn ich dich zurückrufen soll, hinterlasse doch einfach deine Telefonnummer, ich melde mich dann.
            </p>
            <form class="grid-x" @submit="submitForm($event)" @reset="resetForm()">
                <div class="small-12 medium-6 grid-x">
                    <input v-bind:class="'small-12 medium-12' + validate('firstname')" v-model.trim="form.firstname" placeholder="Vorname">
                </div>
                <div class="small-12 medium-6 grid-x">
                    <input v-bind:class="'small-12 medium-12' + validate('lastname')" v-model.trim="form.lastname" placeholder="Nachname">
                </div>
                <div class="small-12 medium-6 grid-x">
                    <input v-bind:class="'small-12 medium-12' + validate('email')" class="small-12 medium-12" v-model.trim="form.email" placeholder="E-Mail">
                </div>
                <div class="small-12 medium-6 grid-x">
                    <input v-bind:class="'small-12 medium-12' + validate('phone')" class="small-12 medium-12" v-model.trim="form.phone" placeholder="Telefon">
                </div>
                <div class="small-12 medium-12 grid-x">
                    <textarea v-bind:class="'small-12 medium-12' + validate('message')" class="small-12 medium-12" v-model.trim="form.message" placeholder="Anliegen"></textarea>
                </div>
                <div class="small-12 buttons">
                    <button type="reset"><i class="fa fa-undo"></i>Zurücksetzen</button>
                    <button type="submit"><i class="fa fa-send"></i>Abschicken</button>
                </div>
            </form>  
        </div>
        <div class="alerts">
            <div v-bind:class="{alert: true, successful: true, visible: alerts.submitWasSuccessful}">
                <span>Die Anfrage wurde erfolgreich verschickt.</span>
            </div>
            <div v-bind:class="{alert: true, failed: true, visible: alerts.submitWasInvalid}">
                <span>Bitte überprüfen Sie Ihre Angaben.</span>
            </div>
            <div v-bind:class="{alert: true, failed: true, visible: alerts.serverError}">
                <span>Bei der Verarbeitung ist ein Fehler aufgetreten, bitte versuchen Sie es später erneut.</span>
            </div>
        </div>
    </div>
</template>

<script>
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const PHONE_REGEXP = /^(0|\+)[0-9\/ -]{8,}$/;

    export default {
        data() {
            return {
                form: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    message: ''
                },
                initialState: true,

                alerts: {
                    submitWasInvalid: false,
                    submitWasSuccessful: false,
                    serverError: false
                },

                validations: {
                    firstname: () => {
                        return this.form.firstname.length > 1;
                    },

                    lastname: () => {
                        return this.form.lastname.length > 1;
                    },

                    email: () => {
                        return !!this.form.email.match(EMAIL_REGEXP);
                    },

                    phone: () => {
                        if (!this.form.phone.length) {
                            return undefined;
                        }

                        return !!this.form.phone.match(PHONE_REGEXP);
                    },

                    message: () => {
                        return this.form.message.length > 10;
                    }
                }
            }
        },

        methods: {
            submitForm(event) {
                event.preventDefault();
                event.stopPropagation();

            /* this.formValidated = false; */
            this.$http.post('/kontakt', this.form).then(
                response => {
                    gtag('event', 'Kontaktanfrage erfolgreich');
                    /* this.formValidated = false; */
                    this.alerts.serverError = false;
                    this.alerts.submitWasInvalid = false;
                    this.resetForm();
                    this.alerts.submitWasSuccessful = true;
                    setTimeout(() => {
                        this.alerts.submitWasSuccessful = false;
                    }, 5000);
                },
                response => {
                    gtag('event', 'Kontaktanfrage nicht erfolgreich');
                    this.alerts.submitWasSuccessful = false;

                    if (400 === response.status) {
                        /* this.formValidated = true; */
                        this.alerts.serverError = false;
                        this.alerts.submitWasInvalid = true;
                        return;
                    }

                    /* this.formValidated = false; */
                    this.alerts.serverError = true;
                }).then(() => {
                    setTimeout(() => {
                        this.alerts.submitWasSuccessful = false;
                        this.alerts.serverError = false;
                        this.alerts.submitWasInvalid = false;
                    }, 5000);
                });

                return false;
            },

            resetForm() {
                this.form.firstname = '';
                this.form.lastname = '';
                this.form.email = '';
                this.form.phone = '';
                this.form.message = '';
                this.initialState = true;
            },

            validate(field) {
                if (this.form[field].length && this.initialState) {
                    this.initialState = false;
                }
            
                if (!this.validations.hasOwnProperty(field) || this.initialState) {
                    return '';
                };

                let result = this.validations[field]();
                
                if (result === undefined) {
                    return '';
                }

                return this.validations[field]() ? ' valid' : ' invalid';
            }
        }
    }
</script>

<style lang="scss">
    @import '../../App';

    .cmp-kontaktformular {
        padding: 0 0 4em;

        h2 {
            margin: 0 0 1.5rem 0;
            line-height: 1.2;
        }

        h3 {
            color: $primary-green;
            margin-top: 0;
        }

        p {
            margin: 1.5rem 0;
        }

        a {
            line-height: 2.5em;
        }

        p:last-child {
            margin-bottom: 0;
        }

        form {  
            max-width: 40em;
            margin: 0 auto;
            .grid-x {
                margin: 0 0 1em;

                @media screen and (min-width: 40em) {
                    &.medium-6:nth-of-type(2n) {
                        padding: 0 0 0 0.5em;    
                    }

                    &.medium-6:nth-of-type(2n+1) {
                        padding: 0 0.5em 0 0;    
                    }
                }

                &:last-child {
                    padding: 0;
                }
            }
    
            input, textarea {
                border: 1px solid $gray;
                border-radius: 3px;
                padding: 0.5em 1em;
                margin: 0;
                user-select: none;

                &.valid { 
                    border-color: $valid;
                }

                &.invalid { 
                    border-color: $invalid; 
                }
            }
    
            textarea {
                height: 7em;
            }

            .buttons {
                text-align: right;
            }
    
            button {
                padding: 0.5em 1em;
                background-color: $primary-green;
                color: $white;
                transition: background-color .5s;
                border-radius: 5px;
                line-height: 1.4;
    
                &:hover {
                    background-color: $secondary-dark;
                }
            }
        }

        .alerts {
            .alert {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 0;
                text-align: center;
                display: none;

                span {
                    position: relative;
                    top: 0;
                    left: 0;
                    display: inline-block;
                    padding: 0.5em 1em;
                    border-radius: 5px;
                    margin: 0 $content-padding;
                }

                &.successful span {
                    background-color: $valid;
                    color: $white;
                }

                &.failed span {
                    background-color: $invalid;
                    color: $white;
                }

                &.visible {
                    display: block;
                    animation: notificationOverlay 4s linear forwards;
                }

                &.visible span {
                    display: inline-block;
                    animation: notification 4s linear forwards;
                }

                @keyframes notificationOverlay {
                    from {
                        display: none;
                        background-color: transparent;
                    }

                    25% {
                        display: block;
                        background-color: rgba(0, 0, 0, 0.5);
                    }

                    75% {
                        display: block;
                        background-color: rgba(0, 0, 0, 0.5);
                    }

                    to {
                        display: none;
                        background-color: transparent;
                        height: 0;
                    }
                }

                @keyframes notification {
                    from {
                        top: -10em;
                    }

                    25% {
                        top: 1em;
                    }

                    75% {
                        top: 1em;
                    }

                    to {
                        top: -10em;
                    }
                }
            }
        }
    }
</style>