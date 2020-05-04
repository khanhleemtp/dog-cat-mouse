// git init
// git status check 
// git add thêm vào trc khi commit
// git commit -m đóng hộp

This project is just a demo how to use git

// git log : xem lịch sử được tạo có thời gian
// git show id : // xem nd commit

// git diff // difference xem su thay doi cua file bi modified

// working directory // thư mục bạn làm việc
// staging area file màu xanh, là đc add để commit git add
// git repository // lưu thay đổi của các commit : git log 

// git checkout--file <-> git restore xóa đi những thay đổi của file 
// git reset <-> git restore --staged đưa từ trạng thái đã add về chưa add
// từ staging area về working directory

// git checkout -b  <branch> (branching): tạo nhánh và chuyển về nhánh đó
// git checkout <branch> chuyển về nhánh	// git branch xem đang ở nhánh nào
// git merge // ghép nhánh 
A <----B

git checkout A
git merge B

master <--- feature/dog-class 
// git branch -D <branch> xóa đi


// git reset --sort <to_commit> // đưa commit về dạng git add (staging area )
nghĩa là mở cái đã commit 
// git reset -- mixed <to_commit>
// đưa commit về dạng working directory
// git reset --hard <to_commit> xóa hẳn commit 
// ctrl Z để trở về


// git revert <commit> 
// dùng khi muốn bỏ commit bằng cách tạo ra commit mới tên revert 
// nguy hiểm 	

// .gitignore // từ chối 1 cái gì đó
// node sẽ check file .gitignore
// nên ignore những file chưa commit
// thường sẽ bỏ node_modules vì nó nặng


// npm install --save thì sẽ lưu vào file package.json khi cài lại chỉ cần npm install


// github

// len git tao thu muc 
// $ git remote add origin https://github.com/khanhleemtp/dog-cat-mouse.git


//git remote -v xem link tải lên 
// git push -u origin master : lần đầu tải code 
 //git push

// luu ttin dang nhap 
// git credential
// git config --global credential.helper store
// not recommend (/.git-credentials)

// get config --global credential.helper "cache--timeout=18000"

// google "git ssh"

//git clone tải code về
// git pull xem những thay đổi 




