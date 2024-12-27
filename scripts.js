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
function openDrawer(event) {
    event.stopPropagation();
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.add('active');
    overlay.classList.add('active');
}

function closeDrawer() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Load The Table
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("table-body");

    // Mock fetch call to simulate data retrieval
    fetch("data1.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(row => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td style="font-size:14px; margin:0; padding:0" class="fw-bold">${row.ID_NO}</td>
                    <td style="font-size:14px; margin:0; padding:0" class="fw-bold">${row.AGENT}</td>
                    <td class=""><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"></td>
                    <td style="font-size:14px; margin:0; padding:0" class="fw-bold text-danger">${row.PHONE_NUMBER}</td>
                    <td style="font-size:14px; margin:0; padding:0" class="fw-bold text-danger">${row.COMPLAIN}</td>
                `;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});

// Dynamic Search Result:
document.addEventListener("DOMContentLoaded", () => {
    const agentData = [
        {
            "ID_NO": "255",
            "AGENT_LABEL": "উনার মাস্টার এজেন্ট আইডি",
            "PHONE_LABEL": "উনার হোয়াটসঅ্যাপ নাম্বার",
            "PHONE_NUMBER": "+60104280230"
        },
    ];

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

