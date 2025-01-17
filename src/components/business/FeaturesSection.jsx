import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  Heading,
  HStack,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaBolt, FaQrcode, FaHandshake, FaWallet } from 'react-icons/fa';

const features = [
  {
    
    title: 'Lightning-Fast Transactions',
    description:
      'Say goodbye to long queues and waiting times! With EpesiPay, payments are processed in a matter of seconds, allowing you to focus on what truly matters — running your business.',
  },
  {
    icon: FaQrcode,
    title: 'Simple QR Code Payments',
    description:
      'Gone are the days of fumbling for cash or entering lengthy card details. Our seamless QR code system makes payments effortless and secure with just a quick scan.',
  },
  {
    icon: FaHandshake,
    title: 'Merchant-Friendly Integration',
    description:
      'EpesiPay integrates smoothly into your point-of-sale system, ensuring a hassle-free setup tailored to your business needs.',
  },
  {
    icon: FaWallet,
    title: 'Affordable for All',
    description:
      'Big or small, we believe every business should have access to affordable payment solutions. Our competitive pricing supports businesses of all sizes.',
  },
];

const EpesiPayFeatures = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box py={10} px={5} bg="gray.50">
      <VStack spacing={8} align="center">
        <Heading as="h2" size="lg" textAlign="center" color="gray.800">
          EpesiPay Business Key Features
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="600px">
          Transform how you process payments with EpesiPay. Streamline your business workflow and enhance customer satisfaction with our intelligent payment solutions.
        </Text>
      </VStack>

      <Flex
        mt={10}
        direction={isMobile ? 'column' : 'row'}
        justify="center"
        align="start"
        wrap="wrap"
        gap={8}
      >
        {features.map((feature, index) => (
          <HStack
            key={index}
            bg="white"
            borderRadius="md"
            shadow="md"
            p={5}
            spacing={4}
            maxW={isMobile ? 'full' : '45%'}
            align="start"
          >
            <Flex
              justify="center"
              align="center"
              bg="yellow.500"
              w={12}
              h={12}
              borderRadius="full"
              color="white"
            >
              <Icon as={feature.icon} boxSize={6} />
            </Flex>
            <VStack align="start" spacing={2}>
              <Heading as="h3" size="md" color="gray.800">
                {feature.title}
              </Heading>
              <Text fontSize="sm" color="gray.600">
                {feature.description}
              </Text>
            </VStack>
          </HStack>
        ))}
      </Flex>
    </Box>
  );
};

export default EpesiPayFeatures;
