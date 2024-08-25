import { TitleView } from '@/components';
import { AppLayout } from '@/layout';
import { DescriptionHomeView, HeroHomeView } from '@/views/home';

export const HomePage = () => {
  return (
    <AppLayout>
      <HeroHomeView />
      <DescriptionHomeView />

      <TitleView
        title='Products'
        position='START'
      >
        <div>
          <span>Hello Products</span>
        </div>
      </TitleView>

      <TitleView
        title='Grid Section'
        position='CENTER'
      >
        <div>
          <span>Hello Products</span>
        </div>
      </TitleView>
    </AppLayout>
  );
};
