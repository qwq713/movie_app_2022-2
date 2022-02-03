  def javaHome = tool name: 'jdk8', type: 'hudson.model.JDK'
  env.JAVA_HOME = "${javaHome}"

node {
    stage('Setting'){
        def githubUrl = 'https://github.com/qwq713/movie_app_2022-2.git'
    }
    stage('Checkout') {
        sh "echo ${githubUrl}"
    }

    stage('Build') {
        sh "echo 'Build Jar'"
    }

    stage('Deploy') {
        sh "echo 'Deply AWS'"
    }
}