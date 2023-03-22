import { FC } from "react";

export const LoadingSpinner: FC = () => {
  return (
    <section className="w-fit h-fit grid place-items-center">
      <svg xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="animate-spin"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512.056 512.056"
        width="512"
        height="512">
        <g>
          <path d="M268.437,512.055c96.436,0.246,184.764-53.923,228.267-139.989c5.035-10.652,0.482-23.369-10.17-28.404   c-10.204-4.824-22.4-0.864-27.825,9.034c-53.371,105.039-181.788,146.925-286.827,93.553   C66.842,392.878,24.957,264.461,78.328,159.421S260.116,12.497,365.155,65.868c40.469,20.563,73.324,53.498,93.788,94.017   c4.979,10.678,17.671,15.299,28.35,10.32s15.299-17.671,10.32-28.35c-0.185-0.396-0.381-0.786-0.59-1.17   C433.306,14.471,279.337-36.191,153.124,27.526s-176.876,217.687-113.159,343.9C83.494,457.65,171.848,512.034,268.437,512.055z" />
        </g>
      </svg>
    </section>
  )
}