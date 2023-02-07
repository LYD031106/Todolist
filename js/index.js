window.onload=function(){
    function changeicon(element){
        if(document.querySelectorAll(".needtodo .content ul li").length!=0){
            need.style.display="block"
        }else{
            need.style.display="none"
        }
        let a=element.querySelector(".none");
        let img=document.createElement("img");
        img.src="./image/打勾.png"
        img.style.transition="all 0.3s"
        img.style.opacity=0
        a.appendChild(img);
        a.querySelector("img").style.opacity=1
    }
    function p_cut(element){
        let a=element.querySelector(".char p");
        a.style.textDecoration="line-through";
    }
    function delete_element(element){
        let a=element.parentElement;
        setTimeout(function(){
            a.removeChild(element)
            setTimeout(function(){
                let m=document.createElement("div")
                m.className="delete"
                m.innerHTML=`
                <img src="./image/垃圾箱.png" alt="">
                `
                element.append(m);
                done_has.style.display="block"
                done.append(element)
                if(document.querySelectorAll(".needtodo .content ul li").length==0){
                    need.style.display="none";
                }else{
                    need.style.display="block"
                }
            })
        },300)
    }
    function changedoneicon(element){
        let img=element.querySelector("img");
        img.style.opacity=0;
        setTimeout(function(){
            element.querySelector(".none").removeChild(element.querySelector("img"));
            element.removeChild(element.querySelector(".delete"))
            element.querySelector("p").style.textDecoration="";
            need.style.display="block"
            console.log(element);
            done.removeChild(element)
            needtodo_ul.append(element)
            if(document.querySelectorAll(".done .content ul li").length==0){
                console.log(1);
                done_has.style.display="none";
            }else{
                console.log(2);
                done_has.style.display="block";
            }
        },300)
    }
    const add=document.querySelector(".add");
    let need=document.querySelector(".needtodo")
    const needtodo_ul=document.querySelector(".needtodo .content ul")
    let needtodo=document.querySelector(".needtodo .content ul")
    let done=document.querySelector(".done .content ul")
    let done_has=document.querySelector(".done")
    /*添加事件*/
    add.addEventListener("click",function(){
        if(document.querySelector(".input_div input").value.length!=0){
            need.style.display="block";
            let i=document.createElement("li");
            let content=`
            <div class="none"></div>
            <div class="char">
                <p>${document.querySelector(".input_div input").value}</p>
            </div>`
            i.innerHTML=content;
            needtodo_ul.appendChild(i)
            document.querySelector(".input_div input").value="";
        }
    })
    needtodo.addEventListener("click",function(e){
        let li_list=document.querySelectorAll(".needtodo .content li");
        let index=[...document.querySelectorAll(".needtodo .none")].indexOf(e.target);
        if(index!=-1){
            changeicon(li_list[index])
            p_cut(li_list[index])
            delete_element(li_list[index])
        }
    })
    done.addEventListener("click",function(e){
        let li_list=document.querySelectorAll(".done .content li");
        let index=[...document.querySelectorAll(".done .content .delete img")].indexOf(e.target);
        if(index!=-1){
            document.querySelector(".done .content ul").removeChild(li_list[index])
            if(document.querySelectorAll(".done .content ul li").length==0){
                done_has.style.display="none";
            }else{
                done_has.style.display="block"
            }
        }
    })
    done.addEventListener("click",function(e){
        let li_list=document.querySelectorAll(".done .content li");
        let index=[...document.querySelectorAll(".done .content .none img")].indexOf(e.target);
        if(index!=-1){
            changedoneicon(li_list[index])
        }
    })
}