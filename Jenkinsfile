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

        sh "echo '=========================================='"
        sh "echo '=========================================='"
        sh "echo '<<<<< CheckOut Start ====================='"
        git branch: "${gitBranch}", url: "${githubUrl}"
        sh "echo '>>>>> CheckOut Complete==================='"
        sh "echo '=========================================='"
        sh "echo '=========================================='"
    }

    stage('Build') {
        sh "echo '=========================================='"
        sh "echo '=========================================='"
        sh "echo '<<<<< Build NPM =========================='"
        sh "echo 'NPM Version Check ========================'"
        sh "npm -v"
        sh "echo 'NPM Build ================================'"
        sh "npm install"
        sh "npm run build"
        sh "echo '>>>>> Build NPM Complete ================='"
        sh "echo '=========================================='"
        sh "echo '=========================================='"
    }

    stage('Deploy'){
        def logfileName = 'reactLogs2022'

        sh "echo '=========================================='"
        sh "echo '=========================================='"
        sh "echo '<<<<< Deploy Start ======================='"

        sh "echo '(REMOTE) execute stop.sh ================='"
        sshCommand remote:remote, command: "${remoteDirectory}${stopShellFile}" 

        sh "echo '(REMOTE) remove ${remoteDirectory}${remoteBuildDirectory} ================='"
        sshRemove remote: remote, path: "${remoteDirectory}${remoteBuildDirectory}"
        
        sh "echo '(REMOTE) remove ${remoteDirectory}${startUpShellFile} ================='"
        sshRemove remote: remote, path: "${remoteDirectory}${startUpShellFile}"
        
        sh "echo '(REMOTE) remove ${remoteDirectory}${stopShellFile} ================='"
        sshRemove remote: remote, path: "${remoteDirectory}${stopShellFile}"

        sh "echo '(REMOTE) put from ${remoteBuildDirectory} into ${remoteDirectory} ================='"
        sshPut remote: remote, from: "${remoteBuildDirectory}", into: "${remoteDirectory}"

        sh "echo '(REMOTE) put from ${startUpShellFile} into ${remoteDirectory} ================='"
        sshPut remote: remote, from: "${startUpShellFile}", into: "${remoteDirectory}"
        sshCommand remote: remote, command: "chmod +x ${remoteDirectory}${startUpShellFile}"

        sh "echo '(REMOTE) put from ${stopShellFile} into ${remoteDirectory} ================='"
        sshPut remote: remote, from: "${stopShellFile}", into: "${remoteDirectory}"
        sshCommand remote: remote, command: "chmod +x ${remoteDirectory}${stopShellFile}"

        sh "echo '(REMOTE) execute start.sh ================='"
        sshCommand remote:remote, command: "${remoteDirectory}${startUpShellFile}" 

        sh "echo '>>>>> Deploy Complete ===================='"
        sh "echo '=========================================='"
        sh "echo '=========================================='"
        
    }
}