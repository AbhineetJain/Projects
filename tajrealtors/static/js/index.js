var images=new Array(); 
for(i=1; i<5; i++)
{
        var name = "house"+i+".jpg";
        images.push(name);
}
pos=0;
curr="house3.jpg";
$(document).ready(function(){
        function interval(){
                pos=$.inArray(curr,images);
                photo=images[(pos+1)%4];
                //$('#image1').hide()
                //$("#image1").attr("src", "static/images/"+photo);
                //$('#image1').slideDown(1500)
                $("#image1").attr("src", "static/images/"+photo);
                curr=photo;
        }
        function set(){
                myvar=setInterval(interval, 5000);
        }
        set();
});
