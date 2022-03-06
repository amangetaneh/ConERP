import { useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import TransferOutItem from "../../fragments/TransferOutItem";
import Item from "../../../models/Item";
import Header from "../../layouts/Header";

function SingleTransfer() {
    const { id } = useParams();

    const [addedItems, setAddedItems] = useState([new Item()]);

    return (
        <>
            <Header title="Transfer Request" />

            <Container className="my-3">
                <Form>
                    <div className="row">
                        <div className="col">
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <Form.Label>Date</Form.Label>
                                    </div>
                                    <div className="col">
                                        <Form.Control readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <Form.Label>Transfer Number</Form.Label>
                                    </div>
                                    <div className="col">
                                        <Form.Control readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <Form.Label>Sending Site</Form.Label>
                                    </div>
                                    <div className="col">
                                        <Form.Control readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <Form.Label>Sending Store</Form.Label>
                                    </div>
                                    <div className="col">
                                        <Form.Control readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <Form.Label>Receiving Site</Form.Label>
                                    </div>
                                    <div className="col">
                                        <Form.Control readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <Form.Label>Receiving Store</Form.Label>
                                    </div>
                                    <div className="col">
                                        <Form.Control readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <Form.Label>Requested By</Form.Label>
                                    </div>
                                    <div className="col">
                                        <Form.Control readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>

                        <div className="col">
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <Form.Label>Approved By</Form.Label>
                                    </div>
                                    <div className="col">
                                        <Form.Control readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <Form.Label>Received By</Form.Label>
                                    </div>
                                    <div className="col">
                                        <Form.Control readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>

                        <div className="col">
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <Form.Label>Sent By</Form.Label>
                                    </div>
                                    <div className="col">
                                        <Form.Control readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <Form.Label>Delivered By</Form.Label>
                                    </div>
                                    <div className="col">
                                        <Form.Control readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>

                        <div className="col">
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <Form.Label>
                                            Vehicle Plate No.
                                        </Form.Label>
                                    </div>
                                    <div className="col">
                                        <Form.Control readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <Button className="bg-teal-dark">
                            Transfer Action
                        </Button>
                    </div>
                </Form>

                <TransferOutItem
                    addedItems={addedItems}
                    setAddedItems={setAddedItems}
                    index={0}
                />
            </Container>
        </>
    );
}

export default SingleTransfer;
