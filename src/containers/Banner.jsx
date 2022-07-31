import CTABlock from 'components/CTABlock';
import CTAImage from 'assets/img/background.jpg';
import Search from 'components/Search';

export default function CallToAction() {
  return (
    <CTABlock
      background={CTAImage}
      parentClassName='mt-2 px-[30px] py-[50px] min-h-[200px] md:min-h-[300px] lg:min-h-[380] xl:min-h-[400px] border-0 flex flex-col items-center justify-center'
    >
      <div className='w-full text-center'>
        <h2 className='text-[#212121] text-2xl font-medium lg:text-4xl mb-4'>
          Yuk Makan Yuuk
        </h2>
        <div className='text-[#5A5A5A] mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>

        <div className='w-full ml-10px mr-20px lg:mr-10 lg:ml-auto lg:flex lg:justify-center'>
          <Search className='border-2' />
        </div>
      </div>
    </CTABlock>
  );
}
