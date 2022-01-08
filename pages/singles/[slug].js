import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../src/Components/Layout/Layout';

export default function (props) {
  const router = useRouter();
  const { slug } = router.query;
  return <Layout page="single" />;
}
