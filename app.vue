<template>
  <div>
    <nuxt-Layout>
      <nuxt-page id="app"/>
    </nuxt-Layout>
 
  </div>
</template>
<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');

:root{
    --blanc: #fff;
    --bg: #f4f5fa;
    --noir: #000;
    --vert:#00a36c;
    --jaune:#fd0;
    --bggris1:#293949;
    --bggris2:#2e4051;
    --gris1:#8f939e;
    --gris2:#797979;
    --red:#ff0000;
    --titre: 35px;
    --paragraphe: 18px;
    --raduis:6px;
    --max-width: 1140px;
    --box-shadow: 0px 0px 10px #888888;
    --shadow-small: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
   --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
 
  }

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
      
}
body , html{

background-color: var(--bg);
font-family: 'Open Sans', sans-serif; 
font-size: 14px;

}


</style>
