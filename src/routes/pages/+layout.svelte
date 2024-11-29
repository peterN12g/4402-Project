<div class="layout-container">
    <div class="nav-column">
        <h1>𝕐</h1>
        <a href="/pages/home" class="nav-link">Home</a>
        <a href="/pages/friends" class="nav-link">Friends</a>
        <a href="/pages/profile" class="nav-link">Profile</a>
    </div>
  
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .layout-container {
      display: flex;
      min-height: 100vh;
    }
  
    .nav-column {
      width: 200px;
      padding: 1rem;
      color: white;
      display: flex;
      flex-direction: column;
      margin-top: 10%;
      margin-left: 15%;
    }
  
    .nav-link {
      color: white;
      text-decoration: none;
      padding: 10px;
      margin: 5px 0;
      border-radius: 4px;
      transition: background-color 0.3s;
      font-size: 2em;
    }
  
    .nav-link:hover {
      background-color: #444;
    }
  
    .content {
      flex: 1;
      padding: 2rem;
    }
  
  </style>
  