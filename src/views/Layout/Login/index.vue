<template>
  <div class="login">
    <div class="login-wrapper">
      <div class="login-header">admin</div>
      <div class="subtitle">一个admin的subtitle</div>
      <Form ref="loginForm" :model="formItem" :rules="rules" class="login-form">
        <FormItem class="login-form-item" prop="username">
          <Input type="text" placeholder="用户名" v-model.trim="formItem.username"></Input>
        </FormItem>
        <FormItem class="login-form-item" prop="password">
          <Input type="password" placeholder="用户名" v-model="formItem.password"></Input>
        </FormItem>
        <FormItem class="login-form-item">
          <Button @click="login" long type="primary">登 入</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formItem: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: 'The username cannot be empty', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'The password cannot be empty', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    login () {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          this.$store.dispatch('Login', this.formItem).then(res => {
            this.$router.push({ name: 'Home' })
          })
        } else {
          console.error('校验没过：(')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  min-height: 100vh;
  padding-top: 200px;
  text-align: center;

  .login-wrapper {
    width: 320px;
    margin: 0 auto;

    .login-header {
      font-weight: 300;
      font-size: 30px;
      color: #000;
    }

    .subtitle {
      margin-bottom: 20px;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
