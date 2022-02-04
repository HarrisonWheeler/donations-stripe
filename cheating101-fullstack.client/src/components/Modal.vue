<template>
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <slot name="modal-title"></slot>
          <button
            type="button"
            class="btn-close bg-light"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <slot name="modal-button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
