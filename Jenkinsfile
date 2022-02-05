node {
    
    def githubUrl = 'https://github.com/qwq713/movie_app_2022-2.git'
    def gitBranch = 'main'
    
    def remote = [:]
    remote.name = 'react-server'
    remote.host = '10.31.0.167'
    remote.user = 'xadmmjh'
    remote.password = 'temp123$'
    remote.allowAnyHosts = true

    def remoteDirectory = '/ext001/movie-app-2022/'
    def remoteBuildDirectory = 'build'
    def startUpShellFile = 'startup.sh'
    def stopShellFile = 'stop.sh'

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
        // sh "npm install" ,,, skip
        sh "npm run build"
    }

    stage('Deploy-CopyBuildFile'){
        sh "echo '========== <Remote Copy from Jenkins Server To Remote DeployServer Build =========='"

        sshRemove remote: remote, path: "${remoteDirectory}${remoteBuildDirectory}"
        sshRemove remote: remote, path: "${remoteDirectory}${startUpShellFile}"
        sshRemove remote: remote, path: "${remoteDirectory}${stopShellFile}"

        sshPut remote: remote, from: "${remoteBuildDirectory}", into: "${remoteDirectory}"

        sshPut remote: remote, from: "${startUpShellFile}", into: "${remoteDirectory}"
        sshPut remote: remote, from: "${stopShellFile}", into: "${remoteDirectory}"
        
        sshCommand remote: remote, command: "chmod +x ${remoteDirectory}${startUpShellFile}"
        sshCommand remote: remote, command: "chmod +x ${remoteDirectory}${stopShellFile}"
        
        sh "echo '========== >Remote Copy Complete =========='"
    }

    stage('Deploy-StartServer'){
        def logfileName = 'reactLogs2022'

        sh "echo '========== <Stop previous React Server =========='"
        sshCommand remote:remote, command: "${remoteDirectory}${stopShellFile} >> ${remoteDirectory}${logfileName} 2>&1" 
        sh "echo '========== >Stop previous React Server Complete=========='"

        sh "echo '========== <Start React Server =========='"
        sshCommand remote:remote, command: "${remoteDirectory}${startUpShellFile} >> ${remoteDirectory}${logfileName} 2>&1" 
        sh "echo '========== >Start React Server Complete=========='"
    }
}