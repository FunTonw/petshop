<template>
<div class="modal" tabindex="-1" ref="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">刪除項目</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>確定需要刪除此項目嗎？</p>
      </div>
      <div class="modal-footer">
        <button
        type="button"
        class="btn btn-primary"
        data-bs-dismiss="modal"
        @click="hideModal();"
        >取消</button>
        <button
         type="button"
         class="btn btn-danger"
        @click="$emit('del-item')">確認刪除</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import modalMixin from '@/mixin/ModalMixin';

export default {
  mixins: [modalMixin],
  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
  },
};
</script>
