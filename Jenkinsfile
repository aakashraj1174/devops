pipeline {
    agent any
    triggers{
        pollSCM ('* * * * *')
    }

    stages {
        stage('pull code from github'){
            steps {
            git branch: 'main', url: 'https://github.com/aakashraj1174/devops.git'
            }
        
        }
        stage('build docker images'){
            steps {
                sh '''
                export PATH=$PATH:/usr/local/bin
                docker build -t portfolio:latest .
                '''
            }
        }
        stage('Run a container'){
            steps{
                sh '''
                export PATH=$PATH:/usr/local/bin
                docker stop portfolio || true
                docker rm portfolio || true
                docker run -d --name portfolio -p 8081:80 portfolio:latest
                '''
            }
        }
}
}