<template>
  <div class="wrapper-simple-form-item px-3">
    <div>
      <div class="title uppercase">
        Инновация
      </div>
      <div class="description mt-4">
        <div class="card-w wrapper-types">
          <div>
            <div class="types-title text-left">
              Название инновации
            </div>
            <ul>
              <li>
                <input class="form-input-item-input" type="text" placeholder="Название" v-model="form.name" >
              </li>
            </ul>
          </div>
          <div>
            <div class="types-title text-left">
              Суть инновации
            </div>
            <ul>
              <li>
                <input class="form-input-item-input" type="text" placeholder="Краткая суть проекта" v-model="form.shortDescription" >
              </li>
            </ul>
          </div>
          <div>
            <div class="types-title text-left">
              Сумма финансирования
            </div>
            <ul>
              <li>
                <input class="form-input-item-input" type="text" placeholder="Сумма" v-model="form.amountOfInvestment" >
              </li>
            </ul>
          </div>
          <div class="form-input-item file w-100">
            <label class="form-input-item-label text-left">
              Прикрепить презентацию (резюме)
            </label>
            <span class="comment">
              Формат: pptx | ppt | odp | otp | pdf
            </span>
            <label class="input-file d-flex justify-content-between w-100 cursor-pointer" for="input-file-present">
              <p class="input-file-text">
                {{ fileNamePresentationInvestment ? fileNamePresentationInvestment : 'Презентация проекта'}}
              </p>
              <img class="input-file-image" src="../../../assets/img/passportPages/peperClip.svg">
            </label>
            <input class="form-input-item-input-files h-100" id='input-file-present' type="file" @change="handleFilePresentationChange">
            <p class="text-danger">
              {{ alert_fileNamePresentationInvestment }}
            </p>
            <p class="text-success">
              {{ success_pre }}
            </p>
          </div>
          <div class="mt-3">
            <div class="types-title text-left">
              ФИО инициатора проекта
            </div>
            <ul>
              <li>
                <input class="form-input-item-input" type="text" placeholder="ФИО инициатора проекта" v-model="form.fioOfLeader" >
              </li>
            </ul>
          </div>
          <div>
            <div class="types-title text-left mb-3">
              Телефон
            </div>
            <div class="wrapper-input-phone">
              <div class="phone-input form-input-item-input" :class="{ 'focused': isFocused }">
                <div
                    class="formatted-phone text-start"
                    @click="focusInput"
                    tabindex="0"
                >
                  {{ formattedPhone || '+7 (___) ___-__-__' }}
                </div>
                <input
                    ref="phoneInput"
                    type="tel"
                    v-model="rawPhone"
                    @focus="isFocused = true"
                    maxlength="18"
                    @blur="onBlur"
                    @input="formatPhone"
                    placeholder="+7 (___) ___-__-__"
                    class="phone-input-field"
                    required
                    style="opacity: 0; position: absolute; width: 0; height: 0;"
                />
              </div>
            </div>
          </div>
          <div class="mt-3">
            <div class="types-title text-left">
              E-mail
            </div>
            <ul>
              <li>
                <input class="form-input-item-input" type="text" placeholder="E-mail" v-model="form.email" >
              </li>
            </ul>
          </div>
          <div class="d-flex justify-content-center mt-5">
            <button class="btn-next btn-item" v-if="!isLoading" @click="postShortForm" :disabled="error || success">
              Отправить
              <img src="../../../assets/img/passportPages/Caret_Circle_Left.svg" alt="">
            </button>
            <div class="btn-next btn-item" v-else>
              <div class="loader"></div>
              <img src="../../../assets/img/passportPages/Caret_Circle_Left.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="alert" :class="{ 'show': success, 'error': error }">
        {{ success ? 'Успешно отправлено!' : 'Ошибка! Не все поля заполнены!' }}
      </div>
    </div>
  </div>
</template>

<script>
// import services

import СrowdfundingDataServices from "@/services/СrowdfundingDataServices"
import UploadFilesDataServices from "@/services/UploadFilesDataServices"

export default{
  name: "invention",
  data() {
    return {
      error: false,
      success: false,
      error_text: 'Ошибка! Не все поля заполнены!',
      isLoading: false,
      fileFinancialModel: '',
      alert_fileFinancialModel: '',
      fileNamePresentationInvestment: '',
      alert_fileNamePresentationInvestment: '',
      rawPhone: '+7 (',
      isFocused: false,
      status: [
        {
          id: 1,
          text: 'Есть только идея'
        },
        {
          id: 2,
          text: 'Есть команда'
        },
        {
          id: 3,
          text: 'Есть MVP'
        },
        {
          id: 4,
          text: 'Есть продажи'
        },
      ],
      form: {
        name: '',
        shortDescription: '',
        amountOfInvestment: '',
        presentation: '',
        fioOfLeader: '',
        phone: '',
        email: '',
      },
      success_fin: '',
      success_pre: '',
    };
  },
  mounted() {

  },
  computed: {
    formattedPhone() {
      const cleaned = this.rawPhone.replace(/\D/g, '');
      if (cleaned.length < 1) return '';

      const countryCode = '+7 ';
      const areaCode = cleaned.substring(1, 4);
      const firstPart = cleaned.substring(4, 7);
      const secondPart = cleaned.substring(7, 9);
      const thirdPart = cleaned.substring(9, 11);

      let formatted = `${countryCode}(${areaCode}`;
      if (firstPart) formatted += `) ${firstPart}`;
      if (secondPart) formatted += `-${secondPart}`;
      if (thirdPart) formatted += `-${thirdPart}`;

      return formatted;
    },
  },
  methods: {

    async postShortForm() {

      this.error = false
      this.isLoading = true

      for ( const key in this.form ) {
        console.log(this.form.hasOwnProperty(key))
        if (this.form.hasOwnProperty(key) && !this.form[key]) {
          this.error = true
          this.isLoading = false
          setTimeout(() => {
            this.error = false
          }, 5000)
          break;
        }
      }
      if (!this.error) {
        СrowdfundingDataServices.postShortForm( this.$route.query.nameType , this.form )
            .then((response) => {
              this.success = true
              localStorage.removeItem('fileNamePresentationInvestment')
              localStorage.removeItem('fileFinancialModel')
              this.isLoading = false

              setTimeout(() => {
                this.success = false

                const { nameType, ...restQuery} = this.$route.query

                this.$router.replace({
                  name: this.$route.name,
                  query: restQuery
                });

              }, 5000)
            })
            .catch((e) => {
              this.isLoading = false
              this.error = true
              if (e.response.status === 400) {
                this.error_text = 'Ошибка! Не все поля заполнены!'
                setTimeout(() => {
                  this.error = false
                }, 5000)
              } else {

                this.error_text = 'Ошибка! Повторите позже.'
                setTimeout(() => {
                  this.error = false
                }, 5000)
              }
              console.log(e)
            })
      }

    },

    formatPhone() {
      this.rawPhone = this.rawPhone.replace(/[^\d+]/g, '').replace(/^(\+7)/, '+7 (');

      const digitsOnly = this.rawPhone.replace(/\D/g, ''); // Получаем только цифры
      if (digitsOnly.length > 10) {
        this.rawPhone = '+7 (' + digitsOnly.substring(1, 4) + ') ' + digitsOnly.substring(4, 7) + '-' + digitsOnly.substring(7, 9) + '-' + digitsOnly.substring(9, 11);
      }

      if (digitsOnly.length === 11) {
        this.form.phone = this.rawPhone;
      } else {
        this.form.phone = ''
      }
    },
    onBlur() {
      this.isFocused = false;
    },
    focusInput() {
      this.$refs.phoneInput.focus();
    },
    async handleFilePresentationChange(event) {
      const filePresentation = event.target.files[0];
      this.fileNamePresentationInvestment = filePresentation.name;
      localStorage.setItem('fileNamePresentationInvestment', this.fileNamePresentationInvestment)
      let formDataDetail = new FormData();
      formDataDetail.append("file", filePresentation);
      this.alert_fileNamePresentationInvestment = ''
      await UploadFilesDataServices.postPresentation(formDataDetail)
          .then(({data}) => {
            this.form.presentation = data.filepath
            this.success_pre = 'Загружено.'
            this.alert_fileNamePresentationInvestment = ''
          })
          .catch((e) => {
            this.success_pre = ''
            if (e.response.status === 415) {
              this.alert_fileNamePresentationInvestment = 'Недопустимый формат файла'
            }
            localStorage.removeItem('fileNamePresentationInvestment')
            console.log(e);
          });
    },
    async handleFileFinancialModelChange(event) {
      const file = event.target.files[0];
      this.fileFinancialModel = file.name;
      localStorage.setItem('fileFinancialModel', this.fileFinancialModel)
      let formDataDetail = new FormData();
      formDataDetail.append("file", file);
      this.alert_fileFinancialModel = ''
      await UploadFilesDataServices.postFinancialModel(formDataDetail)
          .then(({data}) => {
            this.form.financialModel = data.filepath
            this.success_fin = 'Загружено.'
            this.alert_fileFinancialModel = ''
          })
          .catch((e) => {
            this.success_fin = ''
            if (e.response.status === 415) {
              this.alert_fileFinancialModel = 'Недопустимый формат файла'
            }
            localStorage.removeItem('fileFinancialModel')
            console.log(e);
          });
    },

  }
}
</script>

