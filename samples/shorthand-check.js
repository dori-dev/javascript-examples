let access = false;

function showInfo() {
  console.log("Information...");
}

access && showInfo();

access = true;
access && showInfo();
