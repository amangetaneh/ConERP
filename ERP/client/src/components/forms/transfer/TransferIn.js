import React from "react";
import { Link } from "react-router-dom";

import TransferReq from "../../../models/TransferReq";
import Table from "../../fragments/Table";
import Header from "../../layouts/Header";
import { Container } from "react-bootstrap";

function TransferIn() {
    const data = React.useMemo(() => {
        let transferReqs = [];

        for (let i = 0; i < 1000; i++) {
            const transferReq = new TransferReq();
            transferReqs.push({
                ...transferReq,
                view: (
                    <Link
                        className="btn btn-teal"
                        to={`/transfer/${transferReq.id}`}
                    >
                        Test
                    </Link>
                ),
            });
        }

        return transferReqs;
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "Transfer No.",
                accessor: "id", // accessor is the "key" in the data
            },
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Sending Site",
                accessor: "sendSite",
            },
            {
                Header: "Sending Store",
                accessor: "sendStore",
            },
            {
                Header: "",
                accessor: "view",
            },
        ],
        []
    );

    return (
        <>
            <Header title="Transfer In Requests" />

            <Container className="my-3">
                <Table columns={columns} data={data} />
            </Container>
        </>
    );
}

export default TransferIn;
