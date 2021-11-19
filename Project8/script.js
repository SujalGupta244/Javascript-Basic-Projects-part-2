document.addEventListener('DOMContentLoaded',()=>{
    const btn = document.querySelector('.btn');
    const para = document.querySelector('.para p');
    const moreText = document.querySelector('.moretext');
    const preText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis modi eius at beatae harum amet culpa earum ullam consequuntur fugit numquam, magnam, ex, cum animi natus quod odio dignissimos voluptates voluptatum provident. Obcaecati quas laborum consequuntur. Eum, voluptates architecto...`;

    const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, odio error, sapiente beatae impedit, porro neque dolore obcaecati nemo atque culpa soluta? Qui reiciendis magni doloremque placeat, dolorem sapiente culpa sit deleniti sequi magnam repellat ullam atque quibusdam perferendis! Repellendus at incidunt delectus corporis fugit aspernatur! Quis nihil officiis optio soluta repellat itaque, ad ut natus pariatur autem enim accusamus officia quas rerum! Eligendi obcaecati accusamus officia quas odio quae modi, facere deleniti recusandae fugit incidunt impedit quisquam expedita at dolores quibusdam. Earum ab quo voluptatem saepe odit totam enim quasi molestias, laborum illo consequuntur similique quia eos? Consequuntur nemo quaerat eveniet laborum consequatur reiciendis fuga quas. Quas error praesentium sed quibusdam quis, eveniet adipisci cumque. Eos tenetur magni culpa aliquid consectetur. Non recusandae ipsam, illo commodi earum reiciendis possimus rerum animi esse quo alias. Voluptatibus, explicabo deleniti perspiciatis, at dolore aspernatur porro dolorem quibusdam aliquid iste eaque ducimus. Nulla facere non, quia fugit molestiae illum? Doloremque delectus repudiandae, exercitationem pariatur neque aut officia ipsam quae cumque aliquid repellat ducimus repellendus suscipit minima molestiae fugit sunt. Doloribus, officia totam quod labore voluptate ullam vitae quisquam atque officiis voluptatum, ut facilis magni sit iste ipsam? Vel fuga non dolor nostrum quos.`


    btn.addEventListener('click',(e)=>{
        // if(!para.classList.contains('active')){
        //     para.classList.add('active');
        //     // para.textContent = text;
        //     moreText.style.display = `block`;
        //     btn.textContent = 'Read Less';
        // }else{
        //     para.classList.remove('active');
        //     moreText.style.display = `none`;
        //     // para.textContent = preText;
        //     btn.textContent = 'Read More';

        // }
        para.classList.toggle('show-more');
        if(para.classList.contains('show-more')){
            btn.textContent = 'Read Less';
        }else{
            btn.textContent = 'Read More';

        }
    })

})







