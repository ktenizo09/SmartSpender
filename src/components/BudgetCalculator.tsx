import './BudgetCalculator.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function BudgetCalculator() {
    return (
        <>
            <div className="budget-calculator-container">
                <h1>Budget Calculator</h1>
                <p>Calculate your budget and track your expenses.</p>

                <div className="budget-calculator-content">
                    <div className="card">
                        <div className="card-body budget-form">

                            <div className="input-group">
                                <input type="number" id="income-amount" placeholder="Amount" min={0} />
                                <input type="text" id="income-description" placeholder="Description" />
                                <select id="income-category" className='form-select'>
                                    <option value="income">Income</option>
                                    <option value="expense">Expense</option>
                                </select>
                            </div>

                            <button type="submit" className='btn btn-outline-dark' id='btn_add' ><b>Add</b></button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body budget-graph">
                            <h2>Budget Graph</h2>
                            <p>Your budget will be displayed here.</p>
                            {/* Placeholder for future graph implementation */}
                            <div className="graph-placeholder">
                                <p>Graph will be implemented soon!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ width: '100%' }}>
                    <Tabs defaultActiveKey="incomes" id="budget-tabs" className="budget-tabs">
                        <Tab title="Income" eventKey="incomes">
                            <div className="tab-content" >
                                <h2>Income Details</h2>
                                <p>Here you can view and manage your income details.</p>
                                {/* Placeholder for future income details implementation */}
                                <div className="income-placeholder" >
                                    <p>Income details will be implemented soon!</p>
                                </div>
                            </div>
                        </Tab>
                        <Tab title="Expenses" eventKey="expenses">
                            <div className="tab-content">
                                <h2>Expenses Details</h2>
                                <p>Here you can view and manage your expenses details.</p>
                                {/* Placeholder for future expenses details implementation */}
                                <div className="expenses-placeholder">
                                    <p>Expenses details will be implemented soon!</p>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default BudgetCalculator
