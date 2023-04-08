import { Stack, Flex, Container, Box, Spacer } from "@chakra-ui/react";
import "./App.css";

import PricingGrid from "./components/PricingGrid";

function App() {
	return (
		<div className="App">
			{/* <Container>
				<Flex> */}
			<PricingGrid />
			{/* </Flex>
			</Container> */}
		</div>
	);
}

export default App;
