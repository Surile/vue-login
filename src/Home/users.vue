<template>
    <el-container class="container">
        <el-header class="header">
            用户列表
        </el-header>
        <el-main class="main">
            <el-table :data="users">
                <el-table-column
                    prop="name"
                    label="用户名"
                />
                <el-table-column
                    prop="email"
                    label="邮箱"
                />
                <el-table-column
                    prop="createAt"
                    label="创建时间"
                />
            </el-table>                
        </el-main>
    </el-container>
</template>

3<script>
import { fetchUsers } from '../client.js'
export default {
    data() {
        return {
            users: null
        }
    },
    mounted() {
        this.fetchUsers()
    },
    methods: {
        fetchUsers() {
            fetchUsers()
                .then(result => {
                    this.users = result.data.data.data.res
                })
                .catch(err => {
                    if (err.response) {
                        this.$message({
                            type: 'warning',
                            message: err.response.data.data.message
                        })
                    }
                })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../style/page.scss';
</style>

