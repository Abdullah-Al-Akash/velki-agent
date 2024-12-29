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

console.log(allData);
const sidebar = document.getElementById('sidebar');
const openButton = document.getElementById('openSidebar');
const closeButton = document.getElementById('closeSidebar');

// Open sidebar
// Open sidebar
openButton.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active'); // Show overlay when sidebar is open
  });
  
  // Close sidebar using close button
  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active'); // Hide overlay
  });
  
  // Close sidebar when clicking outside (on the overlay)
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });

// Load The Table1
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("table-body");

    // Mock fetch call to simulate data retrieval
    fetch("data1.json")
        .then(response => response.json())
        .then(data => {
            data.slice(0,13).forEach(row => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td style="font-size:15px; margin:0; padding:0; border-left: 1px solid black; border-right: 1px solid black;" class="fw-bold">${row.ID_NO}</td>
                    <td style="font-size:15px; margin:0; padding:0; border-left: 1px solid black; border-right: 1px solid black;" class="fw-bold">${row.AGENT}</td>
                    <td style="border-right: 1px solid black;" class=""><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></a></td>
                    <td style="font-size:15px; margin:0; padding:0; border-left: 1px solid black; border-right: 1px solid black;" class="fw-bold text-danger"><a style="text-decoration:none;" class="text-danger" href=${row.LINK} target="_blank">${row.PHONE_NUMBER}</a></td>
                    <td style="font-size:15px; margin:0; padding:0;border-right: 1px solid black;" class="fw-bold text-danger">
                    <a style="text-decoration:none;" class="text-danger" href="https://wa.me/qr/V45DLDATSHMNC1" target="_blank">${row.COMPLAIN}</a>
                    </td>
                `;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});

// Load Table 2:
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("table-body2");

    // Mock fetch call to simulate data retrieval
    fetch("data1.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(row => {
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
        .catch(error => console.error("Error fetching data:", error));
});
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("table-body3");

    // Mock fetch call to simulate data retrieval
    fetch("data1.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(row => {
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
        .catch(error => console.error("Error fetching data:", error));
});
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("table-body4");

    // Mock fetch call to simulate data retrieval
    fetch("data1.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(row => {
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
        .catch(error => console.error("Error fetching data:", error));
});
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("table-body5");

    // Mock fetch call to simulate data retrieval
    fetch("data1.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(row => {
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
        .catch(error => console.error("Error fetching data:", error));
});
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("table-body6");

    // Mock fetch call to simulate data retrieval
    fetch("data1.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(row => {
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
        .catch(error => console.error("Error fetching data:", error));
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
        const result = allData?.find(agent => agent.ID_NO === agentId);

        resultContainer.innerHTML = ""; // Clear previous results

        if (result) {
            dynamicText.innerHTML = `
                <h4 class="lh-lg text-center text-danger fw-bold">লটারী! লটারী!! লটারী!!!!!...</h4>
                <h4 class="lh-base text-center text-danger fw-bold">আপনি যদি ভেল্কির ইউজার হয়ে থাকেন তাহলে ফ্রীতে লটারী তে জয়েন করুন...</h4>
                <h4 class="lh-base text-center fw-bold">উনি ভেল্কির একজন অনলাইন ${result.AGENT} এজেন্ট নাম্বার ${result.ID_NO} </h4>
            `
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

