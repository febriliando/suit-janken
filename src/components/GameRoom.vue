<template>
  <div class="ui fluid container">
    <div class="ui middle aligned equal width stackable grid">
      <!--  -->
      <div class="center aligned column">
        <div class="ui grid">
          <div class="row">
            <div class="column">
              <img class="ui avatar image" src="../assets/logo.png">
              <span class="name">Username</span>
              <h1 class="ui header">0</h1>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="ui tiny image">
                <img class="pd-btm" src="../assets/rock.png" alt="">
                <img class="pd-btm" src="../assets/paper.png" alt="">
                <img class="pd-btm" src="../assets/scissors.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="center aligned column">
        <div class="ui grid">
          <div class="row">
            <div class="column">
              <span class="title">R</span>
              <img class="rock" src="../assets/rock-font.png" style="">
              <span class="title space">CK</span>
              <span class="title">P</span>
              <img class="paper" src="../assets/paper-font.png" style="">
              <span class="title">PER</span>
            </div>
          </div>
          <div id="btm" class="row">
            <div class="column">
              <span class="title">S</span>
              <img class="scissors" src="../assets/scissors-font.png" style="">
              <span class="title">ISSORS</span>
            </div>
          </div>
          <!-- if -->
          <div class="row">
            <div class="column">
              <span class="title">Counter disini</span>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div class="center aligned middle aligned ui three column grid">
                <div class="column">
                  <img class="ui centered tiny image" src="../assets/rock2.png" alt="">
                </div>
                <div class="column">
                  <span class="title">VS</span>
                </div>
                <div class="column">
                  <img class="ui centered tiny image" src="../assets/scissors2.png" alt="">
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <span class="name">Username Win</span>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <button class="positive massive ui button">REMATCH!</button>
            </div>
          </div>
          <!-- end if -->
        </div>
      </div>
      <!--  -->
      <div class="center aligned column">
        <div class="ui grid">
          <div class="row">
            <div class="column">
              <img class="ui avatar image" src="../assets/logo.png">
              <span class="name">Username</span>
              <h1 class="ui header">1</h1>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="ui tiny image">
                <img class="pd-btm" src="../assets/rock.png" alt="">
                <img class="pd-btm" src="../assets/paper.png" alt="">
                <img class="pd-btm" src="../assets/scissors.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameRoom'
  }
</script>

<style scoped>
  .title {
    font-size: 50px;
    font-weight: 600;
  }

  .space {
    padding-right: 30px;
  }

  .rock {
    position: relative;
    top: 8px;
  }

  .paper {
    position: relative;
    top: 14px;
  }

  .scissors {
    position: relative;
    top: 5px;
  }

  .pd-btm {
    padding-bottom: 15px;
  }

  #btm {
    padding-bottom: 100px !important;
  }

  .match {
    max-width: 80px;
    position: relative;
    top: 34px;
  }

  .ui.middle.aligned.equal.width.stackable.grid {
    height: 100vh;
  }

  .name {
    font-size: 24px;
    font-weight: 600;
    /* padding-top: 4px; */
    position: relative;
    top: 5px;
  }
</style>
