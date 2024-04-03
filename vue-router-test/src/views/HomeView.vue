<script lang="ts" setup>

</script>

<template>
  <main>
    <h1>这是一个主页</h1>
    <div class="content">
      <ul>
        <li>结构</li>
        <li>
          <ul>
            <li>App</li>
            <li>
              <ul>
                <li>VHeader</li>
                <li>RouterView</li>
                <li>
                  <ul>
                    <li>HomeView</li>
                    <li>TodoView</li>
                    <li>
                      <ul>
                        <li>TodoAdd</li>
                        <li>TodoFilter</li>
                        <li>TodoList</li>
                        <li>
                          <ul>
                            <li>TodoItem</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>MyView</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.content {
  font-size: 28px;
  display: flex;
  justify-content: center;
  text-align: left;
}

ul {
  list-style-type: " └─ ";
}

li:has(> ul) {
  list-style-type: "";
}


</style>