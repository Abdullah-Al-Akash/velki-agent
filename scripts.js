// Load All Data:
let allData = [];

async function fetchData() {
  try {
    const res = await fetch("data1.json");
    allData = await res.json();
    console.log(allData); // Log the data here after fetching
  } catch (error) {
    console.error("Error fetching data:", error); // Handle errors
  }
}
fetchData();
// Shuffle Database:
// Async function to fetch the database from an API or JSON file
async function fetchDatabase() {
  try {
    // Replace this URL with your actual API or JSON file URL
    const response = await fetch("data1.json");

    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching the database:", error);
    return []; // Return an empty array in case of an error
  }
}

// Async function to shuffle the fetched database
async function shuffleDatabase() {
  try {
    // Fetch the database
    const database = await fetchDatabase();

    // Shuffle the database
    const shuffled = database.sort(() => Math.random() - 0.5);

    // Return the shuffled database
    return shuffled;
  } catch (error) {
    console.error("Error shuffling the database:", error);
    return [];
  }
}

// Save the shuffled data in a variable
let shuffledDatabase;

// Execute the shuffle and store the result
async function mainData() {
    const shuffledDatabase = await shuffleDatabase();
    return shuffledDatabase;
  }

  mainData().then((data) => {
    console.log(data); // Logs the shuffled database
  });

const sidebar = document.getElementById("sidebar");
const openButton = document.getElementById("openSidebar");
const closeButton = document.getElementById("closeSidebar");

// Open sidebar
// Open sidebar
openButton.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active"); // Show overlay when sidebar is open
});

// Close sidebar using close button
closeButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active"); // Hide overlay
});

// Close sidebar when clicking outside (on the overlay)
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Load The Table1
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body");

  // Mock fetch call to simulate data retrieval
  mainData().then((data) => {
    console.log(data); // Logs the shuffled database  
      data.slice(0, 13).forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td style="font-size:15px; margin:0; padding:0; border-left: 1px solid black; border-right: 1px solid black;" class="fw-bold">${row.ID_NO}</td>
                    <td style="font-size:15px; margin:0; padding:0; border-left: 1px solid black; border-right: 1px solid black;" class="fw-bold">${row.AGENT}</td>
                    <td style="border-right: 1px solid black;" class=""><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></a></td>
                    <td style="font-size:15px; margin:0; padding:0; border-left: 1px solid black; border-right: 1px solid black;" class="fw-bold text-danger"><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank">${row.PHONE_NUMBER}</a></td>
                    <td style="font-size:15px; border-right: 1px solid black;" class="fw-bold">
    <a class="text-danger fw-bold"
       style="text-decoration:none;" 
       href="https://wa.me/qr/V45DLDATSHMNC1" 
       target="_blank" 
       rel="noopener noreferrer">
       ${row.COMPLAIN}
    </a>
</td>
                `;
        tableBody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});

// Load Table 2:
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body2");

  // Mock fetch call to simulate data retrieval
  fetch("data1.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                   <td style="font-size:15px; margin:0; padding:0; border-left: 1px solid black; border-right: 1px solid black;" class="fw-bold">${row.ID_NO}</td>
                    <td style="font-size:15px; margin:0; padding:0; border-right: 1px solid black;" class="fw-bold">${row.AGENT}</td>
                    <td style="border-right: 1px solid black;" class=""><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></a></td>
                    
                    <td style="font-size:15px; margin:0; padding:0;border-right: 1px solid black;" class="fw-bold text-danger"><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank">${row.PHONE_NUMBER}</a></td>
                    <td style="font-size:15px; margin:0; padding:0;border-right: 1px solid black;" class="fw-bold text-danger">
                    <a style="text-decoration:none;" class="text-danger" href="https://wa.me/qr/V45DLDATSHMNC1" target="_blank">${row.COMPLAIN}</a>
                    </td>
                `;
        tableBody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body3");

  // Mock fetch call to simulate data retrieval
  fetch("data1.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td style="font-size:15px; margin:0; padding:0; border-left: 1px solid black; border-right: 1px solid black;" class="fw-bold">${row.ID_NO}</td>
                    <td style="font-size:15px; margin:0; padding:0; border-right: 1px solid black;" class="fw-bold">${row.AGENT}</td>
                    <td style="border-right: 1px solid black;" class=""><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></a></td>
                    
                    <td style="font-size:15px; margin:0; padding:0;border-right: 1px solid black;" class="fw-bold text-danger"><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank">${row.PHONE_NUMBER}</a></td>
                    <td style="font-size:15px; margin:0; padding:0;border-right: 1px solid black;" class="fw-bold text-danger">
                    <a style="text-decoration:none;" class="text-danger" href="https://wa.me/qr/V45DLDATSHMNC1" target="_blank">${row.COMPLAIN}</a>
                    </td>
                `;
        tableBody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body4");

  // Mock fetch call to simulate data retrieval
  fetch("data1.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td style="font-size:15px; margin:0; padding:0; border-left: 1px solid black; border-right: 1px solid black;" class="fw-bold">${row.ID_NO}</td>
                    <td style="font-size:15px; margin:0; padding:0; border-right: 1px solid black;" class="fw-bold">${row.AGENT}</td>
                    <td style="border-right: 1px solid black;" class=""><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></a></td>
                    
                    <td style="font-size:15px; margin:0; padding:0;border-right: 1px solid black;" class="fw-bold text-danger"><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank">${row.PHONE_NUMBER}</a></td>
                    <td style="font-size:15px; margin:0; padding:0;border-right: 1px solid black;" class="fw-bold text-danger">
                    <a style="text-decoration:none;" class="text-danger" href="https://wa.me/qr/V45DLDATSHMNC1" target="_blank">${row.COMPLAIN}</a>
                    
                    </td>
                `;
        tableBody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body5");

  // Mock fetch call to simulate data retrieval
  fetch("data1.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td style="font-size:15px; margin:0; padding:0; border-left: 1px solid black; border-right: 1px solid black;" class="fw-bold">${row.ID_NO}</td>
                    <td style="font-size:15px; margin:0; padding:0; border-right: 1px solid black;" class="fw-bold">${row.AGENT}</td>
                    <td style="border-right: 1px solid black;" class=""><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></a></td>
                    
                    <td style="font-size:15px; margin:0; padding:0;border-right: 1px solid black;" class="fw-bold text-danger"><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank">${row.PHONE_NUMBER}</a></td>
                    <td style="font-size:15px; margin:0; padding:0;border-right: 1px solid black;" class="fw-bold text-danger">
                    <a style="text-decoration:none;" class="text-danger" href="https://wa.me/qr/V45DLDATSHMNC1" target="_blank">${row.COMPLAIN}</a>
                    
                    </td>
                `;
        tableBody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body6");

  // Mock fetch call to simulate data retrieval
  fetch("data1.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td style="font-size:15px; margin:0; padding:0; border-left: 1px solid black; border-right: 1px solid black;" class="fw-bold">${row.ID_NO}</td>
                    <td style="font-size:15px; margin:0; padding:0; border-right: 1px solid black;" class="fw-bold">${row.AGENT}</td>
                    <td style="border-right: 1px solid black;" class=""><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></a></td>
                    
                    <td style="font-size:15px; margin:0; padding:0;border-right: 1px solid black;" class="fw-bold text-danger"><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank">${row.PHONE_NUMBER}</a></td>
                    <td style="font-size:15px; margin:0; padding:0;border-right: 1px solid black;" class="fw-bold text-danger">
                    <a style="text-decoration:none;" class="text-danger" href="https://wa.me/qr/V45DLDATSHMNC1" target="_blank">${row.COMPLAIN}</a>
                    
                    </td>
                `;
        tableBody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});

// Load The Table2:

// Dynamic Search Result:
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const resultContainer = document.getElementById("result-container");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const dynamicText = document.getElementById("dynamic-text-container");
    const agentId = document.getElementById("agent-id").value.trim();
    const result = allData?.find((agent) => agent.ID_NO === agentId);

    resultContainer.innerHTML = ""; // Clear previous results

    if (result) {
      dynamicText.innerHTML = `
                <h4 class="lh-lg text-center text-danger fw-bold">লটারী! লটারী!! লটারী!!!!!...</h4>
                <h4 class="lh-base text-center text-danger fw-bold">আপনি যদি ভেল্কির ইউজার হয়ে থাকেন তাহলে ফ্রীতে লটারী তে জয়েন করুন...</h4>
                <h4 class="lh-base text-center fw-bold">উনি ভেল্কির একজন অনলাইন ${result.AGENT} এজেন্ট নাম্বার ${result.ID_NO} </h4>
            `;
      resultContainer.innerHTML = `
                
                <table>
                    <tr>
                        <td class="text-center">উনার ${result.AGENT} এজেন্ট আইডিঃ</td>
                        <td class="text-center"><span class="text-danger">${result?.ID_NO}</span></td>
                    </tr>
                    <tr>
                        <td class="text-center">উনার হোয়াটসঅ্যাপ নাম্বারঃ</td>
                        <td class="text-center">
                            <img width="250px" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
                            <span class="text-danger fw-bold">${result.PHONE_NUMBER}</span>
                        </td>
                    </tr>
                </table>
            `;
    } else {
      resultContainer.innerHTML = `<div class="no-content">No content found</div>`;
      dynamicText.innerHTML = "";
    }
  });
});
