        let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        const expenseForm = document.getElementById('expenseForm');
        const amountInput = document.getElementById('amount');
        const categorySelect = document.getElementById('category');
        const dateInput = document.getElementById('date');
        const filterCategory = document.getElementById('filterCategory');
        const filterDate = document.getElementById('filterDate');
        const expenseTableBody = document.querySelector('#expenseTable tbody');
        const chartCanvas = document.getElementById('expenseChart');
        let expenseChart;

        function renderGraphic(expensesData = expenses) {
            const categoryTotals = {};
            expensesData.forEach(expense => {
                const category = expense.category;
                categoryTotals[category] = (categoryTotals[category] || 0) + parseFloat(expense.amount);
                console.log(categoryTotals);
            });

            const labels = Object.keys(categoryTotals);
            const data = Object.values(categoryTotals);
            const colors = generateColors(labels.length);

            if (expenseChart) {
                expenseChart.destroy();
            }

            expenseChart = new Chart(chartCanvas, {
                type: 'pie',
                data:
                {
                    labels: labels,
                    datasets: [{
                        label: 'Затраты',
                        data,
                        backgroundColor: colors,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'Затраты по категориям'
                    }
                }
            });
        }

        function generateColors(numColors) {
            const colors = [];
            for (let i = 0; i < numColors; i++) {
                colors.push(`hsl(${i * (360 / numColors)}, 70%, 60%)`);
            }
            return colors;
        }

        function renderTable(expensesData = expenses) {
            expenseTableBody.innerHTML = '';

            expensesData.forEach(expense => {
                const row = expenseTableBody.insertRow();
                const amountCell = row.insertCell(0);
                const categoryCell = row.insertCell(1);
                const dateCell = row.insertCell(2);

                amountCell.textContent = expense.amount;
                categoryCell.textContent = expense.category;
                dateCell.textContent = expense.date;

                console.log("da");
            });
        }

        function updateLocalStorage() {
            localStorage.setItem('expenses', JSON.stringify(expenses));
        }

        function huinyaSubmit(e) {
            e.preventDefault();

            const amount = amountInput.value;
            const category = categorySelect.value;
            const date = dateInput.value;

            if (amount && category && date) {
                const newExpense = { amount, category, date };
                expenses.push(newExpense);

                updateLocalStorage();
                renderGraphic();
                renderTable();

                amountInput.value = '';
                categorySelect.value = '';
                dateInput.value = '';
            }
        }

        function applyFilters() {
            const categoryValue = filterCategory.value;
            const dateValue = filterDate.value;

            let filteredExpenses = expenses;

            if (categoryValue) {
                filteredExpenses = filteredExpenses.filter(expense => expense.category === categoryValue);
            }

            if (dateValue) {
                filteredExpenses = filteredExpenses.filter(expense => expense.date === dateValue);
            }

            renderGraphic(filteredExpenses);
            renderTable(filteredExpenses);
        }

        expenseForm.addEventListener('submit', huinyaSubmit);
        filterCategory.addEventListener('change', applyFilters);
        filterDate.addEventListener('change', applyFilters);

        renderGraphic();
        renderTable();

        //Пока-что самая мозго выносящая херь