node {
    
    def githubUrl = 'https://github.com/qwq713/movie_app_2022-2.git'
    def gitBranch = 'main'
    
    def remote = [:]
    remote.name = 'react-server'
    remote.host = '10.31.0.167'
    remote.user = 'xadmmjh'
    remote.password = 'temp123$'
    remote.allowAnyHosts = true
    
    stage('Setting'){
        sh "echo ${githubUrl}"
    }
    stage('Checkout') {
        sh "echo '========== <CheckOut Start =========='"
        git branch: "${gitBranch}", url: "${githubUrl}"
        sh "echo '========== >CheckOut Complete========== '"
    }

    stage('Build') {
        sh "echo '========== Build NPM =========='"
        sh "echo '========== <NPM Version =========='"
        sh "npm -v"
        sh "echo '========== >NPM Build =========='"
        sh "npm install"
        sh "npm run build"
    }

    stage('Deploy-CopyBuildFile'){
        sh "echo '========== <Remote Copy from Jenkins Server To Remote DeployServer Build =========='"
        sshPut remote: remote, from: 'build', into: '/ext001/movie-app-2022'
        sshPut remote: remote, from: 'startup.sh', into: '/ext001/movie-app-2022'
        sh "echo '========== >Remote Copy Complete =========='"
    }

    stage('Deploy-StartServer'){
        sh "echo '========== <Start React Server =========='"
        sshScript remote:remote, script: "/ext001/movie-app-2022/startup.sh"
        sh "echo '========== >Start React Server Complete=========='"
    }
}