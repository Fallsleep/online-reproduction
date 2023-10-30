<script setup lang="ts">
import { showModal } from './showModal';
import { Modal } from 'ant-design-vue';

const [modal, contextHolder] = Modal.useModal();
const showModalByUseModal = () => {
  modal.confirm({
    title: 'Modal.useModal',
    content: 'some descriptions',
    okText: 'ok',
    cancelText: 'cancel',
    onOk: () => {},
    onCancel: () => {},
  });
};

const open = ref(false);
const showNoramlModal = () => {
  open.value = true;
};
const handleOk = () => {
  open.value = false;
};
</script>

<template>
  <a-button type="primary" @click="() => showModal('')">
    show Modal by shared function
  </a-button>
  <br />
  <br />
  <a-button type="primary" @click="showModalByUseModal">
    show Modal By Modal.useModal()
  </a-button>
  <br />
  <br />
  <a-button type="primary" @click="showNoramlModal">
    show Noraml Modal
  </a-button>

  <a-modal v-model:open="open" ok-text="ok" cancel-text="cancel" @ok="handleOk">
    <template #title>
      <span class="ant-modal-confirm-title">Noraml Modal</span>
    </template>
    <div style="margin-left: 32px">
      <ExclamationCircleOutlined style="font-size: 18px; color: #faad14" />
      some descriptions
    </div>
  </a-modal>
  <contextHolder />
</template>

<style scoped></style>
