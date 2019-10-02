<template>
<sidebar-menu :menu="menu" id="mysidebar"/>
</template>
<script>
export default {
data() {
return {
menu: [
{
header: true,
title: 'header',
hiddenOnCollapse: true
},
{
href: '/dashboard',
title: 'Dashboard',
icon: 'fa fa-clipboard-list'
},
{
href: '/subjects',
title: 'Add Course and Subject',
icon: 'fa fa-calendar-plus'
},
{
href: '/login',
title: 'Logout',
icon: 'fa fa-exclamation-circle',
},
{
href: '/subjects',
title: 'Delete Course and Subjects', 
icon: 'fa fa-calendar-plus'
}
]
}
}
}
</script> 
<style scoped>
    #mysidebar{
        position: fixed;
    }

</style>