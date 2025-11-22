import { collection_names } from './collection.js';

// remember, the domain_names array won't load directly in chrome, cause the domain_names array is set to "export" and a seperate local file
// and can only be loaded by "module" files (security measure by chrome)
// you have to test it in a live server

const param = new URLSearchParams(location.search);
const url = param.get('url');

function infoPop() {
  // Check for invalid URL first
  if (!url || !(url in collection_names)) {
    document.getElementById('error').style.display = "inline-block";
    document.getElementById('container').style.display = "none";
    return;
  }
  
  // Only set title and other content if URL is valid
  document.title = collection_names[url][0];
  document.getElementById('d-name').textContent = collection_names[url][0];
  document.getElementById('puny-name').textContent = url;
  document.getElementById('name-date').textContent = collection_names[url][1];
  document.getElementById('source-dl').href = "https://unicodedomain.com/?utm_source=" + url;
}

// Run after DOM is loaded

document.addEventListener('DOMContentLoaded', infoPop);
