<template>
  <div>
    <div class="block">
      <p class="digit">{{ seconds }}</p>
      <p class="text">Seconds</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: null
  },

  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      event: this.date
    }
  },

  computed: {
    calculatedDate () {
      this.event = Math.trunc(Date.parse(this.event) / 1000)
      return this.event
    },
    seconds () {
      return (this.calculatedDate - this.now) % 60
    },
    minutes () {
      return Math.trunc((this.calculatedDate - this.now) / 60) % 60
    },
    hours () {
      return Math.trunc((this.calculatedDate - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((this.calculatedDate - this.now) / 60 / 60 / 24)
    }
  },

  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  }
}
</script>

<style>
.block {
  float: left;
  margin: 20px;
}
.text {
  text-align: center;
}
.digit {
  margin: 10px;
  text-align: center;
}
</style>