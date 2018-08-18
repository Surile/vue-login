const userNameReg = /^\w+$/

export const  userNameValidator = (rules, value, callback) => {
    if (!value) {
      return  new Error(callback('用户名不能为空'))
    }
    if (!userNameReg.test(value)) {
        return new Error(callback('用户名是由字母和数字组成'))
    }
    callback() 
}


export const passwordPattern = /^[\w_-]{8,18}$/

export const passwordValidator = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('密码不能为空'))
  }

  if (!passwordPattern.test(value)) {
    return callback(new Error('长度在8-18之间，区分大小写字母'))
  }
  callback()
}
