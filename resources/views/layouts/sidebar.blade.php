<div class="sidebar" data-color="darkblue" data-background-color="white">
    <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
    <div class="logo sidebar-header">
        <img class="logo-sidebar" src="{{asset('assets/auth/images/unsyiah.png')}}" width="30" height="30" alt="No-image">
        <a href="{{ url('/mahasiswa') }}" class="simple-text logo-normal title-sidebar">
            {{ config('app.name', 'Monev-in') }}
        </a></div>
    <div class="sidebar-wrapper">
        <ul id="grupmenu" class="nav">
            <li class="nav-item active ">
                <a class="nav-link menu-app" href="javascript:void(0)" data-val="/mahasiswa/dashboard" data-nama="Dashboard">
                    <i class="material-icons">dashboard</i>
                    <p>Dashboard</p>
                </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link menu-app" href="javascript:void(0)" data-val="/mahasiswa/form" data-nama="Pengajuan Proposal">
                    <i class="material-icons">person</i>
                    <p>User Profile</p>
                </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link menu-app" href="javascript:void(0)" data-val="/mahasiswa/list" data-nama="Daftar Tabel">
                    <i class="material-icons">content_paste</i>
                    <p>Table List</p>
                </a>
            </li>
            <!-- <li class="nav-item ">
                <a class="nav-link" href="./typography.html">
                    <i class="material-icons">library_books</i>
                    <p>Typography</p>
                </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link" href="./icons.html">
                    <i class="material-icons">bubble_chart</i>
                    <p>Icons</p>
                </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link" href="./map.html">
                    <i class="material-icons">location_ons</i>
                    <p>Maps</p>
                </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link" href="./notifications.html">
                    <i class="material-icons">notifications</i>
                    <p>Notifications</p>
                </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link" href="./rtl.html">
                    <i class="material-icons">language</i>
                    <p>RTL Support</p>
                </a>
            </li>
            <li class="nav-item active-pro ">
                <a class="nav-link" href="./upgrade.html">
                    <i class="material-icons">unarchive</i>
                    <p>Upgrade to PRO</p>
                </a>
            </li> -->
        </ul>
    </div>
</div>