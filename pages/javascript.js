import React from 'react';
import Image from 'next/image'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';

const Javascript = ({items}) => {
  return (
    <div>
        <Center py={10}  display="grid"
      gridTemplateColumns="repeat(4,1fr)" border="1px solid blue" >
       {items.items.map((e)=>(
      <Box
      key={e.id}
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        border={"1px solid grey"}
        pos={'relative'}
        marginTop={"20%"}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            // backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
            
          <Image
            rounded={'lg'}
            height={200}
            width={250}
            objectFit={'cover'}
             src={e.owner.avatar_url}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text  fontSize={'2xl'} textTransform={'uppercase'}>
            {e.name}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {e.language}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
            ⭐{e.stargazers_count}
            </Text>
            <Text color={"blue.300"} fontWeight={800} fontSize={'xl'}>
            {"  "} ⋔ {"  "}{e.forks}
            </Text>
          </Stack>
        </Stack>
        
      </Box>
        ))}
    </Center>
    </div>
  )
}

export default Javascript;
//https://api.github.com/search/repositories?l=JavaScript&q=rails+language:javascript

export async function getServerSideProps(context){
  let r = await fetch (`https://api.github.com/search/repositories?q=stars:%3E1+language:javascript`);
  let d = await r.json();
  console.log(d)
  return {
   props:{
     items:d,
   }
  }
}
 