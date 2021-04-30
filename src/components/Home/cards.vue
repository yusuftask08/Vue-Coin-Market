<template>
  <div class="container-card">
    <div class="card-list">
      <div class="card ms-5" v-for="(item, index) in 10" :key="index">
        <div class="card-header">
          <div class="card-header-title">
            <h3>item head</h3>
          </div>
        </div>
        <div class="card-body">
          <span style="padding: 10px">item value</span>
        </div>
        <p style="text-align: center; margin-bottom: 5px">item güncellemee</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #f2f2f2;
}
.card-list {
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 10px;
  width: 25%;
  border-radius: 10px;
  overflow: unset;
}

.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-header-title {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.card-header-title h3 {
  font-weight: bold;
  margin-bottom: 5px;
  box-sizing: border-box;
}

.card-body {
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
}

.card-body span {
  font-size: 30px;
  font-weight: 200;
}
</style>