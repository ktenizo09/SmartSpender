import React from 'react';
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

                                <label htmlFor="income">Monthly Income:</label>
                                <div className="input-group">
                                    <input type="number" id="income" placeholder="Income" className='form-control' />
                                    <input type="text" id="income-description" className="form-control" placeholder="Description" />
                                </div>

                                <label htmlFor="expenses">Monthly Expenses:</label>
                                <div className='input-group'>
                                    <input type="number" id="expenses" placeholder="Expenses" className='form-control' />
                                    <input type="text" id="expense-description" className="form-control" placeholder="Description" />
                                </div>

                                <button type="submit" className='btn btn-outline-secondary' id='btn_add' >Add</button>
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
                    <Tabs defaultActiveKey="income" id="budget-tabs" className="budget-tabs">
                        <Tab title="Income" eventKey="incomes">
                            <div className="tab-content">
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
