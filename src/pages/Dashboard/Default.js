import { Row, Col, Card } from 'react-bootstrap';

import Loading from '../../App/components/Loading';
import useFetch from '../../App/hooks/useFetch';

import { base_url } from '../../variables';
import VendorCard from './items/VendorCard';
import FeedbackTabs from './items/FeedbacksMenu';

function Dashboard() {
	const { data: chart, status: chartStatus, refetch: chartRefetch } = useFetch(`${base_url}/admin/chart`);

	return (
		<>
			<Row>
				{
					chartStatus == "success"
						? <>
							<Col md={6} xl={4}>
								<Card>
									<Card.Body>
										<h6 className='mb-4'>Total Online Consultations All Time</h6>
										<div className="row d-flex align-items-center">
											<div className="col-9">
												<h3 className="f-w-300 d-flex align-items-center m-b-0">
													<i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
													{chart.totalCostConsultation[0].cost.toLocaleString("id-ID", {
														style: "currency",
														currency: "IDR"
													})}
												</h3>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col md={6} xl={4}>
								<Card>
									<Card.Body>
										<h6 className='mb-4'>Total Homecare All Time</h6>
										<div className="row d-flex align-items-center">
											<div className="col-9">
												<h3 className="f-w-300 d-flex align-items-center m-b-0">
													<i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
													{chart.totalCostHomeCare[0].cost.toLocaleString("id-ID", {
														style: "currency",
														currency: "IDR"
													})}
												</h3>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col md={6} xl={4}>
								<Card>
									<Card.Body>
										<h6 className='mb-4'>Total Bookings &amp; Live Orders All Time</h6>
										<div className="row d-flex align-items-center">
											<div className="col-9">
												<h3 className="f-w-300 d-flex align-items-center m-b-0">
													<i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
													{
														(chart.totalCostConsultation[0].cost + chart.totalCostHomeCare[0].cost).toLocaleString("id-ID", {
															style: "currency",
															currency: "IDR"
														})
													}
												</h3>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col md={6} xl={4}>
								<Card>
									<Card.Body>
										<h6 className='mb-4'>Total Vendor Count Today</h6>
										<div className="row d-flex align-items-center">
											<div className="col-9">
												<h3 className="f-w-300 d-flex align-items-center m-b-0">
													<i className="feather icon-arrow-down text-c-red f-30 m-r-5" />
													{chart.vendorToday > 1 ? chart.vendorToday + " Vendors" : chart.vendorToday + " Vendor"}
												</h3>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col md={6} xl={4}>
								<Card>
									<Card.Body>
										<h6 className='mb-4'>Total User Registration Today</h6>
										<div className="row d-flex align-items-center">
											<div className="col-9">
												<h3 className="f-w-300 d-flex align-items-center m-b-0">
												<i className="feather icon-arrow-down text-c-red f-30 m-r-5" />
													{chart.userToday > 1 ? chart.userToday + " Users" : chart.userToday + " User"}
												</h3>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col md={6} xl={4}>
								<Card>
									<Card.Body>
										<h6 className='mb-4'>Total Consultation Count Today</h6>
										<div className="row d-flex align-items-center">
											<div className="col-9">
												<h3 className="f-w-300 d-flex align-items-center m-b-0">
												<i className="feather icon-arrow-down text-c-red f-30 m-r-5" />
													{chart.consultationToday} Count
												</h3>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
						</>
						: <Col>
							<Card>
								<Card.Body>
									<Loading />
								</Card.Body>
							</Card>
						</Col>
				}
				<Col lg={4} md={6} xl={12}>
					<VendorCard />
				</Col>
				<Col xl={12} className='m-b-30'>
					<FeedbackTabs />
				</Col>
			</Row>
		</>
	);
}

export default Dashboard;