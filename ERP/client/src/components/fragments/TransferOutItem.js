import { Form, Button, InputGroup } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

function TransferOutItem({ addedItems, setAddedItems, index }) {
    function valueChanged(e) {
        const addedItemsCpy = [...addedItems];
        addedItemsCpy[index][e.target.name] = e.target.value;
        setAddedItems(addedItemsCpy);
    }

    return (
        <div className="shadow pt-3 px-4 mb-4 rounded">
            <div className=" row justify-content-between">
                <div className="col-auto">
                    <h1 className="display-6 fs-4">Item {index + 1}</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Form.Group className="mb-3">
                        <Form.Label>Item</Form.Label>
                        <Form.Control type="text" readOnly />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mb-3">
                        <Form.Label>Quantity</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="number"
                                name="qty"
                                value={addedItems[index].qty}
                                onChange={valueChanged}
                            />
                            <Form.Select
                                name="unit"
                                value={addedItems[index].unit}
                                onChange={valueChanged}
                            >
                                {addedItems[index].units.map((unit, index) => (
                                    <option key={index} value={index}>
                                        {unit}
                                    </option>
                                ))}
                            </Form.Select>
                        </InputGroup>
                    </Form.Group>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Form.Group className="mb-3">
                        <Form.Label>Specification</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="spec"
                            rows={5}
                            value={addedItems[index].spec}
                            onChange={valueChanged}
                        />
                    </Form.Group>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <Form.Group className="mb-3">
                                <Form.Label>Unit Cost</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="cost"
                                    value={addedItems[index].cost}
                                    onChange={valueChanged}
                                />
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mb-3">
                                <Form.Label>Total Cost</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="total"
                                    value={addedItems[index].total}
                                    onChange={valueChanged}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group className="mb-3">
                        <Form.Label>Total Cost</Form.Label>
                        <Form.Control
                            type="number"
                            name="total"
                            value={addedItems[index].total}
                            onChange={valueChanged}
                        />
                    </Form.Group>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Form.Group className="mb-3">
                        <Form.Label>Request Remark</Form.Label>
                        <Form.Control type="text" readOnly />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mb-3">
                        <Form.Label>Send Remark</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </div>
            </div>
        </div>
    );
}

export default TransferOutItem;

