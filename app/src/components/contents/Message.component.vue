<template>
  <div id="message-modal" class="modal hide fade in" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title">Sugerencias</h4>
          <button type="button" class="close" data-dismiss="modal" @click="closeModal">&times;</button>
        </div>

        <div class="modal-body mb-4">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <textarea class="form-control" rows="5" placeholder="Ayudanos a mejorar..." v-model="message"></textarea>
              </div>
            </div>
            <div class="col-md-12 text-right">
              <button type="button" class="btn" @click="sendMessage" :disabled="message.length <= 0">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="alertObj.visible" class="alert col-md-8 offset-md-2" role="alert" :class="alertObj.class">
    {{ alertObj.message }}
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import MessageService from '@/services/Message.service'

export default ({
  name: 'MessageComponent',
  setup() {
    const messageService = new MessageService()
    const message = ref('')
    const alertObj = ref({ visible: false, message: 'Error enviando mensaje!', class: 'alert-danger' })

    const sendMessage = () => {
      messageService.sendMessage(message.value)
        .then(res => res.json())
        .then(({ ok }) => {
          if(ok) alertObj.value = { visible: true, message: 'Mensaje enviado!', class: 'alert-success' }
        })
        .catch(err => {
          alertObj.value.visible = true
          console.error(err)
        })
        
        setTimeout(() => {
          alertObj.value.visible = false
        }, 3000)
        clean()
    }

    const clean = (flag: boolean = true) => {
      const btnClose = document.getElementsByClassName('close')[0] as HTMLButtonElement
      message.value = ''
      if(flag) btnClose.click()
    }

    const closeModal = () => {
      clean(false)
    }

    return {
      message,
      alertObj,
      sendMessage,
      closeModal
    }
  },
  components: {}
})
</script>

<style scoped>
textarea {
  resize: none;
}

.form-control{
  background-color: #494949;
  color: var(--text-primary);
  border: 0px;
}

.btn {
  background-color: var(--default-btn-color);
  border-color: var(--default-btn-color);
  color: var(--text-primary);
}

.btn :hover{
  opacity: 0.5;
}
</style>