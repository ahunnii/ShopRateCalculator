import {
	Avatar,
	AvatarGroup,
	Box,
	Button,
	Container,
	Flex,
	FormControl,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	List,
	ListIcon,
	ListItem,
	SimpleGrid,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaHammer, FaInfoCircle, FaPlus, FaTrash, FaTshirt } from "react-icons/fa";
import { MdLocalGasStation, MdNewReleases, MdOutlineElectricalServices, MdOutlineHomeWork } from "react-icons/md";
import FormInput from "../../components/ui/Form/FormInput";

const handleFieldIcon = (data) => {
	if (data == "MdOutlineHomeWork") return MdOutlineHomeWork;
	if (data == "MdLocalGasStation") return MdLocalGasStation;
	if (data == "MdOutlineElectricalServices") return MdOutlineElectricalServices;
	if (data == "FaHammer") return FaHammer;

	return MdNewReleases;
};
export default function CostPanel({ title, text, hint, fields }) {
	const [total, setTotal] = useState(0);
	const addToTotal = (num) => {
		setTotal(total + num);
	};

	useEffect(() => {
		console.log("total: " + total);
	}, [total]);
	return (
		<>
			<Stack spacing={4} marginTop="1rem">
				<Heading color={"gray.800"} lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}>
					{title}
				</Heading>
				<Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
					{text}
				</Text>
			</Stack>

			<Box as={"form"} mt={10}>
				<FormControl onChange={(e) => addToTotal(parseInt(e.target.value))}>
					<Stack spacing={4}>
						{fields &&
							fields.map((field) => (
								<FormInput Icon={handleFieldIcon(field.icon)} title={field.name} handleCost={addToTotal} />
							))}
					</Stack>
				</FormControl>
			</Box>

			<Stack direction={["row"]} marginTop={"1rem"} justifyContent={"center"}>
				<FaInfoCircle color="gray.300" />
				<Text fontSize="sm">{hint}</Text>
			</Stack>
		</>
	);
}
