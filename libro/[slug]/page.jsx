//INFO: list -> pages
//SEE: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
import { mk_params } from '@/lib/fetch-data';

const getParams= mk_params('https://docs.google.com/spreadsheets/d/e/2PACX-1vQI2LQ18c9dtIJvrzjLdVztkREkycbkT1LF0DSsOyfXox57sUo2SfLtar2uWJ-vLQ/pub?output=csv', {
		delimiter: ',',
  		columns: true,
  		skip_empty_lines: true,
		slugCols: 'TÍTULO',
	}
);


export default async function Libro({params}) {
	let d= await getParams();
	let este= d.find( r => (r.slug == params.slug) );
		return <div>
		<div>Libro {JSON.stringify(params)} este: {JSON.stringify(este)}</div>
		<ul>
		</ul>
	</div>
}

export const generateStaticParams= async () => { 
	let r= await getParams(); console.log("PARAMS", r); return r; 
};
