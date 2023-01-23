sudo apt update
exit
sudo apt update
sudo apt install default-jdk-headless
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > \
    /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt-get install jenkins
sudo systemctl status jenkins
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
sudo systemctl status jenkins
curl -v -X GET http://44.209.81.118:8080/crumbIssuer/api/json --user admin:1c3224ef1d7b4c2c9c3d3546efb41445
curl -X POST http://jenkins-url:8080/job/pro9/build --user admin:1c3224ef1d7b4c2c9c3d3546efb41445 -H 'Jenkins-Crumb: 7f52c59a666bc11e285cd206bff4f55d9e77fde38543576f9c76da93eeb1f13c'
curl -X POST http://44.209.81.118:8080/job/pro9/build --user admin:1c3224ef1d7b4c2c9c3d3546efb41445 -H 'Jenkins-Crumb: 7f52c59a666bc11e285cd206bff4f55d9e77fde38543576f9c76da93eeb1f13c'
curl -v -X POST http://44.209.81.118:8080/job/pro9/buildWithParameters?param=value --user admin:1c3224ef1d7b4c2c9c3d3546efb41445
exit
ls /var/lib/jenkins/jobs/ansible/builds/
ansible-playbook -i /var/lib/jenkins/jobs/ansible/builds/3/archive/inventory/dev.yml /var/lib/jenkins/jobs/ansible/builds/3/archive/playbooks/common.yml
cleatr
clear
ssh ec2-user@172.31.83.25
ssh ec2-user@172.31.82.61
ssh ec2-user@172.31.84.187
ssh ubuntu@172.31.86.254
exit
ssh ubuntu@172.31.86.254
ansible-playbook -i /var/lib/jenkins/jobs/ansible/builds/7/archive/inventory/dev.yml /var/lib/jenkins/jobs/ansible/builds/7/archive/playbooks/common.yml
ssh ubuntu@172.31.86.254
ansible-playbook -i /var/lib/jenkins/jobs/ansible/builds/3/archive/inventory/dev.yml /var/lib/jenkins/jobs/ansible/builds/3/archive/playbooks/common.yml
ansible-playbook -i /var/lib/jenkins/jobs/ansible/builds/4/archive/inventory/dev.yml /var/lib/jenkins/jobs/ansible/builds/4/archive/playbooks/common.yml
ansible-playbook -i /var/lib/jenkins/jobs/ansible/builds/5/archive/inventory/dev.yml /var/lib/jenkins/jobs/ansible/builds/5/archive/playbooks/common.yml
ansible-playbook -i /var/lib/jenkins/jobs/ansible/builds/6/archive/inventory/dev.yml /var/lib/jenkins/jobs/ansible/builds/6/archive/playbooks/common.yml
sudo mkdir /home/ubuntu/ansible-config-artifact
chmod -R 0777 /home/ubuntu/ansible-config-artifact
sudo chmod -R 0777 /home/ubuntu/ansible-config-artifact
ls /home/ubuntu
ll /home/ubuntu/ansible-config-artifact/
sudo chmod 0777 -R  /home/ubuntu/ansible-config-artifact/
sudo chown nobody:nobody -R  /home/ubuntu/ansible-config-artifact/
sudo chown nobody:nobody /home/ubuntu/ansible-config-artifact/
sudo chmod 755 /home
sudo chmod -R 755 /home
exit
ls -ld /home/ec2-user/
echo 'ssh-rsa
echo ssh-rsa
echo
sudo chown root:root /home
ls /var/lib/jenkins/jobs/ansible/builds/
ansible-playbook -i /var/lib/jenkins/jobs/ansible/builds/9/archive/inventory/dev.yml /var/lib/jenkins/jobs/ansible/builds/9/archive/playbooks/site.yml
ansible-playbook -i /var/lib/jenkins/jobs/ansible/builds/11/archive/inventory/dev.yml /var/lib/jenkins/jobs/ansible/builds/11/archive/playbooks/site.yml
exit
ansible-playbook -i /var/lib/jenkins/jobs/ansible/builds/11/archive/inventory/dev.yml /var/lib/jenkins/jobs/ansible/builds/11/archive/playbooks/site.yml
ll /home/ec2-user/.ssh
ls /home/ec2-user/
ls /homeubuntu/
sudo ls /home/ubuntu
sudo ls /home/ubuntu/.ssh
sudo ls -ld /home/ubuntu/.ssh
sudo ls -ld /home/ubuntu/.ssh/authorized_keys 
sudo ls -ld /home/ubuntu/
sudo vi /etc/ansible/ansible.cfg
cd ansible-config-artifact/
sudo vi /etc/ansible/ansible.cfg
udo ls /etc
ls /etc
ls etc/ansible
cd ..
sudo vi /etc/ansible/ansible.cfg
ls /etc
ls /etc/ansible
systemctl status ansible
ansible --version
ls /home/ubuntu/ansible
ls /home/ubuntu/.ansible
ls /etc/ansible
ls /etc/.ansible
ls /etc
ansible-playbook -i /var/lib/jenkins/jobs/ansible/builds/12/archive/inventory/uat.yml /var/lib/jenkins/jobs/ansible/builds/12/archive/playbooks/site.yml
ansible-playbook -i /home/ubuntu/ansible-config-artifact/inventory/uat.yml /home/ubuntu/ansible-config-artifact/playbooks/site.yml
sudo vi /etc/ansible/ansible.cfg
ansible-config init --disabled > ansible.cfg
list
ansible-config init --disabled > ansible.cfg
sudo vi /etc/ansible/ansible.cfg
cd /etc/ansible/ansible.cfg
cd /etc
mkdir ansible/ansible.cfg
mkdir /ansible/ansible.cfg
sudo mkdir /ansible
cd ansible
ls
mkdir ansible
sudo mkdir ansible
cd ansible/
touch anisble.cfg
sudo touch ansible.cfg
sudo vi ansible.cfg 
cd ..
exit
ansible-playbook -i /home/ubuntu/ansible-config-artifact/inventory/uat.yml /home/ubuntu/ansible-config-artifact/playbooks/site.yml
ansible-playbook -i /home/ubuntu/ansible-config-artifact/inventory/uat.yml /home/ubuntu/ansible-config-artifact/playbooks/site.yml
--vvv
-vvv
ansible-playbook -i /home/ubuntu/ansible-config-artifact/inventory/uat.yml /home/ubuntu/ansible-config-artifact/playbooks/site.yml
sudo chmod 777 -R /home/ubuntu/ansible-config-artifact/static-assignments/common-del.yml
sudo chmod 777 -R /home/ubuntu/ansible-config-artifact
sudo vi /etc/ansible/ansible.cfg
cd roles/
mv geerlingguy.mysql/ mysql
ls
git status
git add .
git commit -m "changes on role dircetory"
git push --set-upstream origin roles-feature
git status
git add .
t commit -m e"edited mysql file"
git commit -m e"edited mysql file"
git push --set-upstream origin roles-feature
git status
git add .
git commit -m "edited mysql"
git push
git checkout maimn
git checkout main
git status
cd roles/
git checkout main
ansible-galaxy install geerlingguy.nginx
sudo ansible-galaxy install geerlingguy.nginx
sudo ansible-galaxy install geerlingguy.apache
mv geerlingguy.apache/ apache
mv geerlingguy.nginx/ nginx
cd roles/
git status
git add .
git commit -m "edited apache"
git push
git push origin main
git push
