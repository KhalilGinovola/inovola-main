<template>
  <div
    class="contact-us lg:w-[770px] p-4 sm:p-10 rounded-2xl bg-white border border-solid border-offWhite-1 shadow-[0_0px_20px_0px_rgba(0,0,0,0.04)]"
  >
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 p-fluid md:pe-5">
        <label class="text-sm text-text-1 font-medium" for="firstName">
          {{ $t("forms.firstName") }}
        </label>
        <InputText
          id="firstName"
          v-model.trim="firstName"
          :class="[
            'mt-2 bg-offWhite-1 p-4 border border-border-6 border-solid rounded-lg text-text-15 text-sm focus:font-semibold',
            { 'border-red-600': $v.firstName.$dirty && !$v.firstName.required },
          ]"
          type="text"
          :placeholder="$t('forms.firstNamePlaceholder')"
        />
        <small
          v-if="$v.firstName.$dirty && !$v.firstName.required"
          class="text-red-600 invalid"
        >
          {{ $t("forms.notEmpty") }}
        </small>
      </div>
      <div class="w-full md:w-1/2 p-fluid mt-5 sm:mt-0">
        <label class="text-sm text-text-1 font-medium" for="lastName">
          {{ $t("forms.lastName") }}
        </label>
        <InputText
          id="lastName"
          v-model.trim="lastName"
          :class="[
            'mt-2 bg-offWhite-1 p-4 border border-border-6 border-solid rounded-lg text-text-15 text-sm focus:font-semibold',
            { 'border-red-600': $v.lastName.$dirty && !$v.lastName.required },
          ]"
          type="text"
          :placeholder="$t('forms.lastNamePlaceholder')"
        />
        <small
          v-if="$v.lastName.$dirty && !$v.lastName.required"
          class="text-red-600 invalid"
        >
          {{ $t("forms.notEmpty") }}
        </small>
      </div>
      <div class="w-full md:w-1/2 p-fluid mt-5 md:pe-5">
        <label class="text-sm text-text-1 font-medium" for="workEmail">
          {{ $t("forms.workEmail") }}
        </label>
        <InputText
          id="workEmail"
          v-model.trim="workEmail"
          :class="[
            'mt-2 bg-offWhite-1 p-4 border border-border-6 border-solid rounded-lg text-text-15 text-sm focus:font-semibold',
            { 'border-red-600': $v.workEmail.$dirty && !$v.workEmail.required },
            {
              'border-red-600': $v.workEmail.$dirty && !$v.workEmail.email,
            },
          ]"
          type="text"
          placeholder="example@gmail.com"
        />
        <small
          v-if="$v.workEmail.$dirty && !$v.workEmail.required"
          class="text-red-600 invalid"
        >
          {{ $t("forms.notEmpty") }}
        </small>
        <small
          v-else-if="$v.workEmail.$dirty && !$v.workEmail.email"
          class="text-red-600 invalid"
        >
          {{ $t("forms.incorrectEmail") }}
        </small>
      </div>
      <div class="w-full md:w-1/2 p-fluid mt-5">
        <label class="text-sm text-text-1 font-medium" for="companyName">
          {{ $t("forms.companyName") }}
        </label>
        <InputText
          id="companyName"
          v-model.trim="companyName"
          :class="[
            'mt-2 bg-offWhite-1 p-4 border border-border-6 border-solid rounded-lg text-text-15 text-sm focus:font-semibold',
            {
              'border-red-600':
                $v.companyName.$dirty && !$v.companyName.required,
            },
          ]"
          type="text"
          :placeholder="$t('forms.Elmostaqbal')"
        />
        <small
          v-if="$v.companyName.$dirty && !$v.companyName.required"
          class="text-red-600 invalid"
        >
          {{ $t("forms.notEmpty") }}
        </small>
      </div>

      <div class="w-full p-fluid mt-5">
        <label class="text-sm text-text-1 font-medium" for="interestedField">
          {{ $t("forms.interestIn") }}
        </label>
        <Dropdown
          v-model.trim="interestedField"
          :class="[
            'mt-2 bg-offWhite-1 rounded-lg text-text-15 border border-border-6 border-solid text-sm',
            {
              'border-red-600':
                $v.interestedField.$dirty && !$v.interestedField.required,
            },
          ]"
          :options="interestedFields"
          option-label="text"
          option-value="value"
          :placeholder="$t('forms.interestedField')"
        />
        <small
          v-if="$v.interestedField.$dirty && !$v.interestedField.required"
          class="text-red-600 invalid"
        >
          {{ $t("forms.notEmpty") }}
        </small>
      </div>

      <div class="w-full p-fluid mt-5">
        <label class="text-sm text-text-1 font-medium" for="message">
          {{ $t("forms.message") }}
        </label>
        <Textarea
          id="message"
          v-model.trim="message"
          :class="[
            'mt-2 bg-offWhite-1 p-4 border border-border-6 border-solid rounded-lg text-text-15 text-sm focus:font-semibold',
            { 'border-red-600': $v.message.$dirty && !$v.message.required },
          ]"
          type="text"
          :placeholder="$t('forms.writeYourMessage')"
          rows="7"
        />
        <small
          v-if="$v.message.$dirty && !$v.message.required"
          class="text-red-600 invalid"
        >
          {{ $t("forms.notEmpty") }}
        </small>
      </div>

      <Button
        class="w-full flex justify-center mt-6 primary font-medium text-base leading-5 py-[1.125rem] rounded-lg"
        aria-label="Button"
        @click="handleSubmit"
      >
        {{ $t("forms.submit") }}
      </Button>
    </div>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators"
// import { useVuelidate } from "@vuelidate/core"
import { SEND_CONTACT } from "~/utils/storeActions"
export default {
  name: "ContactUsForm",
  // setup() {
  //   return { v$: useVuelidate() }
  // },
  data() {
    return {
      firstName: "",
      lastName: "",
      workEmail: "",
      companyName: "",
      message: "",
      interestedField: "",
      interestedFields: [
        {
          text: this.$t("footer.digitalTransformation"),
          value: "digital-transformation",
        },
        {
          text: this.$t("footer.devTeamService"),
          value: "dev-team-service",
        },
        {
          text: this.$t("footer.hRService"),
          value: "hr-service",
        },
      ],
    }
  },
  validations() {
    return {
      workEmail: {
        required,
        email,
      },
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      companyName: {
        required,
      },
      interestedField: {
        required,
      },
      message: {
        required,
      },
    }
  },
  methods: {
    handleSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      this.sendContact()
    },
    sendContact() {
      this.$store
        .dispatch("common/" + SEND_CONTACT, {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.workEmail,
          company_name: this.companyName,
          interested_in: this.interestedField,
          message: this.message,
        })
        .then(() => {
          this.firstName = ""
          this.lastName = ""
          this.workEmail = ""
          this.companyName = ""
          this.interestedField = ""
          this.message = ""
          this.$router.push(this.localePath("/"))
        })
    },
  },
}
</script>
