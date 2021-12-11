<template>
  <div class="ten-properties" :class="{'handle-left':handleLeft,'handle-right':handleRight}">
    <div class="handle left"></div>
    <div class="wrap">
      <div class="list floating-labels">
        <slot name="fields">
        </slot>
      </div>
    </div>
    <div class="handle right"></div>
  </div>
</template>

<script>
  export default {
    name: "ten-property-panel",
    props: {
      handleLeft: {
        type: Boolean,
        default: false
      },
      handleRight: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">

  .ten-properties {
    width:100%;
    height:100%;
    overflow-y: hidden;
    overflow-x: hidden;
    .wrap {
      float: left;
      display:inline-block;
      overflow-y: scroll;
      overflow-x: hidden;
      width:100%;
      height:100%;
      .list {
        width:100%;
        min-height:100%;
        .form-group {
          padding-left: 0;
          border-bottom: 1px #aaaaaa solid;
          label {
            border:none;
            padding-left: 0.15rem;
          }
          input {
            padding-left: 0.15rem;
          }
          &:focus-within {
            background-color: #eeeeee;
            outline: 1px #eeeeee;
            input {
              background-color: transparent;
            }
          }
        }
        input {
          border: none;
          padding-left: 0;
          padding-right: 0;
          &:focus-visible {
            outline: none;
          }
        }
      }
    }
    .handle {
      height: 100%;
      float: left;
      width: 4px;
      background-color: #888888;
      display: none;
    }
    &.handle-left .handle.left {
      display: inline-block;
    }
    &.handle-left .handle.right {
      display: inline-block;
    }
    &.handle-left .wrap {
      width: calc(100% - 4px);
    }
    &.handle-right .wrap {
      width: calc(100% - 4px);
    }
    &.handle-left.handle-right .wrap {
      width: calc(100% - 8px);
    }
    input {
      width:100%;
    }
  }
</style>
